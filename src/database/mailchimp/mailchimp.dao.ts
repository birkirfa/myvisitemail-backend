import * as Mailchimp from 'mailchimp-api-v3';
import { IMailLists, IMailingList, IMailchimpTemplateFolder, IMailchimpTemplate } from './mailchimp.model';
import { IResortCustomerTemplate } from '../resort-customers/resort-customers.model';
import * as moment from 'moment-timezone';

export class MailchimpDao {
    private mailchimpApiKey = '579e812841299b40988a9bd905d2ac9f-us17';
    private mailchimp: Mailchimp;

    constructor(apiKey?: string) {
        this.mailchimp = new Mailchimp(apiKey || this.mailchimpApiKey);
    }

    public isComplete(campaign) {
        if (campaign.settings
            && campaign.settings.title
            && campaign.settings.template_id
            && campaign.settings.from_name
            && campaign.settings.reply_to
            && campaign.settings.subject_line) {
            return true;
        }
        return false;
    }

    public getLists(): Promise<IMailLists> {
        return this.mailchimp.get('/lists?email=${email}');
    }

    public getListsByEmail(email: string): Promise<IMailLists> {
        return this.mailchimp.get(`/lists?email=${email}`);
    }

    public getListById(listId: string): Promise<IMailingList> {
        return this.mailchimp.get(`/lists/${listId}`);
    }

    public async getTotalCampaignCount (): Promise<any> {
        let total = await this.mailchimp.get('/campaigns');
        return total['total_items'];
    }

    public async getCampaigns (): Promise<any> {
        const total = await this.getTotalCampaignCount();
        return this.mailchimp.get(`/campaigns?count=${total}`);
    }

    public async queryCampaignsByDate (date): Promise<any> {
        const time = moment.tz(date, 'Atlantic/Reykjavik').toISOString();
        const total = await this.getTotalCampaignCount();
        return this.mailchimp.get(`/campaigns?count=${total}&since_send_time=${time}`);
    }

    public async getCampaignsForBooking(bookingCreationDate): Promise<any[]> {
        const fromDate = new Date();
        fromDate.setHours(new Date().getHours() - 1);
        let data = await this.queryCampaignsByDate(fromDate);
        let regExp = new RegExp(bookingCreationDate);
        let campaignArray = [];
        for (let i in data['campaigns']) {
            let campaign = data['campaigns'][i];
            if (campaign.settings && regExp.test(campaign.settings.title)) {
                campaignArray.push(campaign);
            }
        }
        return campaignArray;
    }

    public getAutomations (): Promise<any> {
        return this.mailchimp.get('/automations');
    }

    public createList (listObject: any): Promise<any> {
        return this.mailchimp.post('/lists', listObject);
    }

    public updateList (listId: string, listObject: any): Promise<any> {
        return this.mailchimp.patch(`/lists/${listId}`, listObject);
    }

    public async addMemberList (customer: any, contact: any): Promise<any> {
        const listData = await this.getListsByEmail(customer.email);
        if (listData.lists.length > 0) {
            return listData.lists[0];
        }

        let listObj = {
            'name': customer.email + '_subscribedTo_' + contact.name,
            'contact': {
                'company': customer.firstName + '_' + customer.lastName,
                'address1': contact.address,
                'address2': '',
                'city': '',
                'state': '',
                'zip': '',
                'country': '',
                'phone': ''
            },
            'permission_reminder': 'Mailchimp generated',
            'campaign_defaults': {
                'from_name': contact.name,
                'from_email': contact.email,
                'subject': '',
                'language': 'en'
            },
            'email_type_option': true
        };

        let campaignList = await this.createList(listObj);
        try {
            await this.mailchimp.post(`/lists/${campaignList.id}/members`, {
                'email_address': customer.email,
                'status': 'subscribed'
            });
        } catch (err) {
            return Promise.reject(err);

        }
        return campaignList;
    }

    /**
     *
     * @param {Object} campaign:
     * exampleCampaing: {
         recipients: {
            list_id: '8d998c5b10'
        },
         type: 'regular',
         settings: {
            title: 'Mailchimp api test',                        mandatory
            template_id: 1309,                                  mandatory
            from_name: 'Jacek',                                 mandatory
            reply_to: 'jacek.bednarczyk.softiti@gmail.com',     mandatory
            subject_line: 'Mailchimp api test'                  mandatory
        }
    }
     */
    public createCampaign(campaign: any): Promise<any> {
        return this.mailchimp.post('/campaigns', campaign);
    }

    public updateCampaign(campaignUpdate: any, campaignId: string): Promise<any> {
        return this.mailchimp.patch(`/campaigns/${campaignId}`, campaignUpdate);
    }

    /**
     * @param {string} campaignId
     * @param {string} action Available values:
     *                      + cancel-send
     *                      + pause
     *                      + replicate
     *                      + resume
     *                      + schedule
     *                      + send
     *                      + test
     *                      + unschedule
     */
    public performCampaignAction(campaignId: string, action: string, options: object): Promise<any> {
        let scheduleDate;
        if (action === 'schedule') {
            try {
                scheduleDate = new Date(options['schedule_time']);
                this.setScheduleMinutes(scheduleDate);
                options['schedule_time'] = scheduleDate;
            } catch (error) {
                console.error(error);
                throw (error);
            }
        }
        return this.mailchimp.post(`/campaigns/${campaignId}/actions/${action}`, options);
    }

    private setScheduleMinutes(date: Date) {
        let minutes = date.getMinutes();
        let hours = date.getHours();
        const toCheck = minutes % 15;
        if (toCheck % 15 !== 0) {
            const setMinutes = minutes + 15 - toCheck;
            if (minutes === 60) {
                minutes = 0;
                hours++;
                date.setHours(hours);
            }
            date.setMinutes((minutes + 15 - toCheck));
        }
    }

    /**
     * {'schedule_time':'2017-02-04T19:13:00+00:00','timewarp':'false','batch_delay':'false'}
     * @param {Object} campaignObject
     * @param {Date} date
     */
    public createAndScheduleCampaign(campaignObject: any, date: Date): Promise<any> {
        this.setScheduleMinutes(date);
        return new Promise ((resolve, reject) => {
            this.createCampaign(campaignObject)
                .then(createdCampaign => {
                    this.performCampaignAction(createdCampaign.id, 'schedule', {
                        schedule_time: date
                    })
                    .then(resolve)
                    .error(reject);
                });
        });

    }

    public async clearCampaigns (): Promise<any> {
        const condition = new Date().getDate();
        const campaigns = (await this.getCampaigns()).campaigns;
        let removePromises = [];
        if (campaigns && campaigns.length) {
            for (let i in campaigns) {
                let campaign = campaigns[i];
                let check = new Date (campaign.send_time).getDate();
                if (condition - check > 365) {
                    removePromises.push(this.deleteCompleteCampaign(campaign));
                }
            }
        }
        return await Promise.all(removePromises);
    }

    public deleteCampaign(campaignId: string): Promise<any> {
        return this.mailchimp.delete(`/campaigns/${campaignId}`);
    }

    private async deleteCompleteCampaign (campaignObj): Promise<any> {
        await this.deleteCampaign(campaignObj.id);
        return this.mailchimp.delete(`/lists/${campaignObj.recipients.list_id}`);
    }

    public getReports(): Promise<any> {
        return this.mailchimp.get('/reports');
    }

    public getReportsFor(campaignId: string): Promise<any> {
        return this.mailchimp.get(`/reports/${campaignId}`);
    }

    public getTemplateById (templateId: string): Promise<any> {
        return this.mailchimp.get(`/templates/${templateId}`);
    }

    public getTemplateContentById (templateId: string): Promise<any> {
        return this.mailchimp.get('/file-manager/files');    // /templates/' + templateId + '/default-content'
    }

    public createTemplate (templateData: IResortCustomerTemplate): Promise<any> {
        return this.mailchimp.post(
            '/templates', templateData
        );
    }

    public updateTemplate (templateId, templateData: IResortCustomerTemplate): Promise<any> {
        return this.mailchimp.patch(
            `/templates/${templateId}`, templateData
        );
    }

    public removeTemplate (templateId: string): Promise<any> {
        return this.mailchimp.delete(`/templates/${templateId}`);
    }

    public getFolders (): Promise<any> {
        return this.mailchimp.get('/template-folders/');
    }

    public getFolderById (id: number): Promise<any> {
        return this.mailchimp.get(`/template-folders/${id}`);
    }

    public createFolder (folderName: string): Promise<any> {
        return this.mailchimp.post(
            '/template-folders', {name: folderName}
        );
    }

    public removeFolder (folderId): Promise<any> {
        return this.mailchimp.delete(`/template-folders/${folderId}`);
    }

    public removeList (listId): Promise<any> {
        return this.mailchimp.delete(`/lists/${listId}`);
    }

    public createAndTestCampaign (templateData, emails): Promise<any> {
        return new Promise <any> ((resolve, reject) => {
            this.updateTemplate(templateData.templateId, templateData.data.template)
                .then(() => {
                    this.createCampaign(
                        {
                            type: 'regular',
                            settings: {
                                title: 'Test campaign',
                                template_id: Number.parseInt(templateData.templateId),
                                from_name: 'Test sender',
                                reply_to: 'mveDevs@gmail.com',
                                subject_line: templateData.data.subject || 'Test campaign'
                            }
                        })
                        .then(result => {
                            this.performCampaignAction(result.id, 'test', {
                                test_emails: emails,
                                send_type: 'html'
                            }).then(res => {
                                resolve('Test email has been sent.');
                            }).catch(err => {
                                if (/This campaign cannot be tested:/.test(err.detail)) {
                                    this.deleteCampaign(result.id)
                                        .then(() => resolve(err.detail))
                                        .catch(error => reject(error));
                                } else {
                                    reject(err);
                                }
                            });
                        })
                        .catch(err => reject(err));
                })
                .catch(err => reject(err));
        });

    }

    public async clearTestCampaignsByTemplateUsed (tempId: number): Promise<any> {
        let data = await this.getCampaigns();
        let promises = [];
        if (data.campaigns) {
            for (let key in data.campaigns) {
                let campaign = data.campaigns[key];
                if (campaign.settings &&
                    campaign.settings.template_id === tempId &&
                    campaign.settings.title === 'Test campaign') {
                    promises.push(this.deleteCampaign(campaign.id));
                }
            }
        }
        return await Promise.all(promises);
    }

}
