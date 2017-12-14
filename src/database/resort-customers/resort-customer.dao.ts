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
        await this.mailchimp.removeTemplate(customer.bookedTemplate.templateId);
        await this.mailchimp.removeTemplate(customer.beforeCheckInTemplate.templateId);
        await this.mailchimp.removeTemplate(customer.afterCheckOutTemplate.templateId);
        await this.mailchimp.removeTemplate(customer.cancellationTemplate.templateId);
        await this.mailchimp.removeFolder(customer.templateFolderId);
        return await super.remove(customerId);
    }

    public async update (itemId, updateData) {
        let updateTemplate :IResortCustomerTemplate;
        updateTemplate.html = updateData.bookedTemplate.html;   //templateId
        updateTemplate.name = 'bookedTemplate';
        await this.mailchimp.updateTemplate(
            updateData.bookedTemplate.templateId,
            updateTemplate
        );
        updateTemplate.html = updateData.beforeCheckInTemplate.html;   //templateId
        updateTemplate.name = 'beforeTemplate';
        await this.mailchimp.updateTemplate(
            updateData.beforeCheckInTemplate.templateId,
            updateTemplate
        );
        updateTemplate.html = updateData.afterCheckOutTemplate.html;   //templateId
        updateTemplate.name = 'afterTemplate';
        await this.mailchimp.updateTemplate(
            updateData.afterCheckOutTemplate.templateId,
            updateTemplate
        );
        updateTemplate.html = updateData.cancellationTemplate.html;   //templateId
        updateTemplate.name = 'cancelTemplate';
        await this.mailchimp.updateTemplate(
            updateData.cancellationTemplate.templateId,
            updateTemplate
        );
        return await super.update(itemId, updateData);
    }

    // check the workings then maybe add a toJSON method
    public async createWithUniqueCheck (createData: IResortCustomer, queryObj) {
        let templateData :IResortCustomerTemplate;
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
        createData.bookedTemplate = <ITemplateData> {
            templateId: booked.id,
            html: templateData.html
        };
        createData.beforeCheckInTemplate = <ITemplateData> {
            templateId: before.id,
            html: templateData.html
        };
        createData.afterCheckOutTemplate = <ITemplateData> {
            templateId: after.id,
            html: templateData.html
        };
        createData.cancellationTemplate = <ITemplateData> {
            templateId: cancel.id,
            html: templateData.html
        };
        return await super.createWithUniqueCheck(createData, queryObj);
    }
}
