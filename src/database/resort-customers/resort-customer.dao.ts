import { CustomerModel } from './customer.model';
import { GenericDao } from '../generic.dao';
import { MailchimpDao } from '../mailchimp/mailchimp.dao';
import { IResortCustomer } from './resort-customers.model';

export class CustomerDao extends GenericDao {
    mailchimp: MailchimpDao;

    constructor() {
        const customer = new CustomerModel(false);
        super(customer.getSchema(), 'resort-customers');
        this.mailchimp = new MailchimpDao('');
    }

    private getReportsByListId(listId: string, reports) {
        return reports.filter(report => {
            return report.list_id === listId;
        });
    }

    public getReportsByCustomerEmail(eMail: string) {
        // const mailLists = (this.mailchimp.getLists()).lists;
        // const reports = (this.mailchimp.getReports()).reports;
        // let customerReports = [];
        // for (const key in mailLists) {
        //     if (mailLists[key]) {
        //         const mailList = mailLists[key];
        //         if (mailList.campaign_defaults &&
        //             mailList.campaign_defaults.from_email === eMail) {
        //             customerReports = customerReports.concat(
        //                 this.getReportsByListId(mailList.id, reports)
        //             );
        //         }
        //     }
        // }
        // customerReports.sort((reportA, reportB) => {
        //     return new Date(reportA.send_time).getTime() -
        //         new Date(reportB.send_time).getTime();
        // });
        // return customerReports;
    }

    public getAll(): Promise<IResortCustomer[]> {
        return super.getAll();
    }

    public getCustomerById(customerId): Promise<IResortCustomer> {
        let result;
        try {
            result = this.querySingle({ _id: customerId });
        } catch (error) {
            return Promise.reject('Resort not found!');
        }

        return result;
    }

    public querySingle(queryObj): Promise<IResortCustomer> {
        return super.querySingle(queryObj);
    }
}
