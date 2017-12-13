import {CustomerModel} from "./customer.model";
import {GenericDao} from "../generic.dao";
import {MailchimpDao} from "../mailchimp/mailchimp.dao";
import {ResortCustomer} from "./customer";

export class CustomerDao extends GenericDao {
    mailchimp: MailchimpDao;

    constructor () {
        const customer = new CustomerModel(false);
        super(customer.getSchema(), 'resort-customers');
        this.mailchimp = new MailchimpDao('');
    }

    private getReportsByListId(listId: string, reports) {
        return reports.filter(report => {
            return report.list_id === listId;
        })
    }

    public async getReportsByCustomerEmail (eMail: string) {
        let mailLists = (await this.mailchimp.getLists()).lists;
        let reports = (await this.mailchimp.getReports()).reports;
        let customerReports = [];
        for (let key in mailLists) {
            let mailList = mailLists[key];
            if (mailList.campaign_defaults &&
                mailList.campaign_defaults.from_email === eMail) {
                customerReports = customerReports.concat(
                    this.getReportsByListId(mailList.id, reports)
                );
            }
        }
        customerReports.sort((reportA, reportB) => {
            return new Date(reportA.send_time).getTime() -
                new Date(reportB.send_time).getTime();
        });
        return customerReports;
    }

    public getAll() : Promise<ResortCustomer[]> {
        return super.getAll();
    }

    public async getCustomerById (customerId) : Promise<ResortCustomer> {
        let result;
        try {
            result = await this.querySingle({ _id: customerId });
        } catch (error) {
            return Promise.reject('Resort not found!');
        }

        return result;
    }

    public querySingle(queryObj): Promise<ResortCustomer> {
        return super.querySingle(queryObj);
    }
}