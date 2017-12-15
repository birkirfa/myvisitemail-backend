import { CustomerModel } from './customer.model';
import { GenericDao } from '../generic.dao';
import { MailchimpDao } from '../mailchimp/mailchimp.dao';
import { IResortCustomer, ITemplateData, IResortCustomerTemplate } from './resort-customers.model';

export class CustomerDao extends GenericDao {
    private mailchimp: MailchimpDao;

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

    public async removeComplete (customerId) {
        let customer = <IResortCustomer> await this.querySingle({_id: customerId});
        await this.mailchimp.removeTemplate(customer.booked.templateId);
        await this.mailchimp.removeTemplate(customer['check-in'].templateId);
        await this.mailchimp.removeTemplate(customer['check-out'].templateId);
        await this.mailchimp.removeTemplate(customer.cancellation.templateId);
        await this.mailchimp.removeFolder(customer.templateFolderId);
        return await super.remove(customerId);
    }

    public async update (itemId, updateData) {
        let updateTemplate :IResortCustomerTemplate = {
            name: '',
            html: '',
            folderId: updateData.templateFolderId
        };
        updateTemplate.html = updateData.booked.html;   //templateId
        updateTemplate.name = 'bookedTemplate';
        await this.mailchimp.updateTemplate(
            updateData.booked.templateId,
            updateTemplate
        );
        updateTemplate.html = updateData['check-in'].html;   //templateId
        updateTemplate.name = 'beforeTemplate';
        await this.mailchimp.updateTemplate(
            updateData['check-in'].templateId,
            updateTemplate
        );
        updateTemplate.html = updateData['check-out'].html;   //templateId
        updateTemplate.name = 'afterTemplate';
        await this.mailchimp.updateTemplate(
            updateData['check-out'].templateId,
            updateTemplate
        );
        updateTemplate.html = updateData.cancellation.html;   //templateId
        updateTemplate.name = 'cancelTemplate';
        await this.mailchimp.updateTemplate(
            updateData.cancellation.templateId,
            updateTemplate
        );
        return await super.update(itemId, updateData);
    }

    // check the workings then maybe add a toJSON method
    public async createWithUniqueCheck (createData: IResortCustomer, queryObj) {
        let templateData :IResortCustomerTemplate = {
            name: '',
            html: '',
            folderId: ''
        };
        templateData.html = 'testing';
        const folder = await this.mailchimp.createFolder(createData.contact.name);
        templateData.folderId = folder.id;
        templateData.name = 'bookedTemplate';
        const booked =  await this.mailchimp.createTemplate(templateData);
        templateData.name = 'beforeTemplate';
        const before = await this.mailchimp.createTemplate(templateData);
        templateData.name = 'afterTemplate';
        const after = await this.mailchimp.createTemplate(templateData);
        templateData.name = 'cancelTemplate';
        const cancel = await this.mailchimp.createTemplate(templateData);
        createData.templateFolderId = folder.id;
        createData.booked = <ITemplateData> {
            templateId: booked.id,
            html: templateData.html
        };
        createData['check-in'] = <ITemplateData> {
            templateId: before.id,
            html: templateData.html
        };
        createData['check-out'] = <ITemplateData> {
            templateId: after.id,
            html: templateData.html
        };
        createData.cancellation = <ITemplateData> {
            templateId: cancel.id,
            html: templateData.html
        };

        return await super.createWithUniqueCheck(createData, queryObj);
    }
}
