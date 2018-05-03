import { MailchimpDao } from '../mailchimp/mailchimp.dao';
import { CustomerDao } from '../resort-customers/resort-customer.dao';
import { BokunDao } from '../api/booking/bokun/bokun.dao';

const RESOURCE_NOT_FOUND_STATUS = 404;
const BAD_REQUEST_STATUS = 400;

export class CampaginsService {
    private customerDao: CustomerDao;
    private mailchimpDao: MailchimpDao;
    private bokunDao: BokunDao;

    constructor(customerDao: CustomerDao,
                mailchimpDao: MailchimpDao,
                bokunDao: BokunDao) {
        this.customerDao = customerDao;
        this.mailchimpDao = mailchimpDao;
        this.bokunDao = bokunDao;
    }

    public async createCampagins() {
        const customersToBookingsZip = await this.prepareDataForCampaigns();

        // TODO: split into smaller reusable operations + consider using RxJs for async collection processing
        for (const { customer, bookings } of customersToBookingsZip) {
            for (const booking of bookings.bokun) {
                console.log(`Creating campaigns for: ${booking.customer.email}`);

                if (!booking.customer.email) {
                    continue;
                }

                let campaignList;
                try {
                    campaignList = await this.mailchimpDao.addMemberList(booking.customer, customer.contact);
                } catch (err) {
                    throw new Error(`Creating member list has failed: ${err.toString()}`);
                }

                let campaigns;
                try {
                    campaigns = await this.mailchimpDao.getCampaignsForBooking(booking.creationDate);
                } catch (err) {
                    throw new Error(`Getting campaigns has failed: ${err.toString()}`);
                }

                if (booking.status !== 'CANCELLED') {
                    if (campaigns.length) {
                        continue;
                    }

                    if (customer.booked.toUse) {
                        const sendDate = new Date();
                        sendDate.setMinutes(new Date().getMinutes() + 5);   // set schedule date to 5 minutes from now

                        try {
                            await this.performCampaignAction({
                                title: booking.creationDate + '_booked',
                                template_id: parseInt(customer.booked.templateId),
                                from_name: customer.contact.name,
                                subject_line: (customer.booked.subject ||
                                    'Booking of ' + customer.contact.name + ' produt.'),
                                reply_to: customer.contact.email
                            }, campaignList.id, sendDate);
                        } catch (err) {
                            if (err.status !== BAD_REQUEST_STATUS) {
                                throw new Error(`Performing campaign has failed: ${err.toString()}`);
                            }
                        }
                    }

                    if (customer['check-in'].toUse) {
                        const beforeDate = new Date(booking.startDate);
                        beforeDate.setDate(beforeDate.getDate() - 3);    // set schedule date to 3 days before check-in
                        if (new Date().getTime() < beforeDate.getTime()) {
                            try {
                                await this.performCampaignAction({
                                    title: booking.creationDate + '_check-in',
                                    template_id: parseInt(customer['check-in'].templateId),
                                    from_name: customer.contact.name,
                                    subject_line: (customer['check-in'].subject ||
                                        'Check-in of ' + customer.contact.name + ' produt.'),
                                    reply_to: customer.contact.email
                                }, campaignList.id, beforeDate);
                            } catch (err) {
                                throw new Error(`Creating and scheduling campaign has failed: ${err.toString()}`);
                            }
                        }
                    }

                    if (customer['check-out'].toUse) {
                        const afterDate = new Date(booking.endDate);
                        afterDate.setDate(afterDate.getDate() + 3);        // set schedule date to 3 days after check-out

                        if (new Date().getTime() < afterDate.getTime()) {
                            try {
                                await this.performCampaignAction({
                                    title: booking.creationDate + '_check-out',
                                    template_id: parseInt(customer['check-out'].templateId),
                                    from_name: customer.contact.name,
                                    subject_line: (customer['check-out'].subject ||
                                        'Check-out of ' + customer.contact.name + ' produt.'),
                                    reply_to: customer.contact.email
                                }, campaignList.id, afterDate);
                            } catch (err) {
                                throw new Error(`Creating and scheduling campaign has failed: ${err.toString()}`);
                            }
                        }
                    }
                } else {
                    let has = false;
                    for (let i in campaigns) {
                        if (/cancellation/.test(campaigns[i].settings.title)) {
                            has = true;
                        } else {
                            try {
                                await this.mailchimpDao.deleteCampaign(campaigns[i].settings.id);
                            } catch (err) {
                                // If campaign is already deleted just continue, throw an error otherwise
                                if (err.status !== RESOURCE_NOT_FOUND_STATUS) {
                                    throw new Error(`Deleting campaign has failed: ${err.toString()}`);
                                }
                            }
                        }
                    }

                    if (!has && customer.cancellation.toUse) {
                        const sendDate = new Date();
                        sendDate.setMinutes(new Date().getMinutes() + 5);    // set schedule date to 5 minutes from now
                        try {
                            await this.performCampaignAction({
                                title: booking.creationDate + '_cancellation',
                                template_id: parseInt(customer.cancellation.templateId),
                                from_name: customer.contact.name,
                                subject_line: (customer.cancellation.subject ||
                                    'Cancellation of ' + customer.contact.name + ' produt.'),
                                reply_to: customer.contact.email
                            }, campaignList.id, sendDate);
                        } catch (err) {
                            if (err.status !== BAD_REQUEST_STATUS) {
                                throw new Error(`Performing campaign has failed: ${err.toString()}`);
                            }
                        }
                    }
                }
            }
        }
    }

    private performCampaignAction (campaignSettings, campaignListId, sendDate): Promise <any> {
        return this.mailchimpDao.createAndScheduleCampaign({
            recipients: {list_id: campaignListId},
            type: 'regular',
            settings: campaignSettings
        }, sendDate);
    }

    public async prepareDataForCampaigns () {
        try {
            // Creating list of customers with their corresponding booking list
            const customersToBookingsZip = [];
            const customers = await this.customerDao.getAll();

            for (const customer of customers) {
                const bookings = await this.getBookingsForCustomer(customer);

                customersToBookingsZip.push({
                    customer,
                    bookings
                });
            }

            return customersToBookingsZip;
        } catch (err) {
            throw new Error(`Preparing data for campaigns has failed: ${err.toString()}`);
        }
    }

    private async getBookingsForCustomer(customer: any): Promise<any> {
        let bokunBookings = [];

        try {
            bokunBookings = await this.bokunDao.getActions(customer.APIAccess.bokun)
                .getBookings();
            // Add other api calls
        } catch (err) {
            console.error(`Getting bookings has failed ${err.toString()}`);
        }

        return {
            bokun: bokunBookings
        };
    }
}
