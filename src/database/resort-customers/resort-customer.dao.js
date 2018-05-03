"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_model_1 = require("./customer.model");
const generic_dao_1 = require("../generic.dao");
const mailchimp_dao_1 = require("../mailchimp/mailchimp.dao");
class CustomerDao extends generic_dao_1.GenericDao {
    constructor() {
        const customer = new customer_model_1.CustomerModel(false);
        super(customer.getSchema(), 'resort-customers');
        this.mailchimp = new mailchimp_dao_1.MailchimpDao('');
    }
    getReportsByListId(listId, reports) {
        return reports.filter(report => {
            return report.list_id === listId;
        });
    }
    getReportsByCustomerEmail(eMail) {
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
    getAll() {
        return super.getAll();
    }
    getCustomerById(customerId) {
        let result;
        try {
            result = this.querySingle({ _id: customerId });
        }
        catch (error) {
            return Promise.reject('Resort not found!');
        }
        return result;
    }
    querySingle(queryObj) {
        return super.querySingle(queryObj);
    }
    async removeComplete(customerId) {
        let customer = await this.querySingle({ _id: customerId });
        await this.mailchimp.removeTemplate(customer.booked.templateId);
        await this.mailchimp.removeTemplate(customer['check-in'].templateId);
        await this.mailchimp.removeTemplate(customer['check-out'].templateId);
        await this.mailchimp.removeTemplate(customer.cancellation.templateId);
        await this.mailchimp.removeFolder(customer.templateFolderId);
        return await super.remove(customerId);
    }
    handleTemplate(templateId, templateData) {
        if (templateId) {
            return this.mailchimp.updateTemplate(templateId, templateData);
        }
        else {
            return this.mailchimp.createTemplate(templateData);
        }
    }
    async update(itemId, updateData) {
        const folderId = updateData.templateFolderId ? updateData.templateFolderId :
            (await this.mailchimp.createFolder(updateData.contact.name)).id;
        let updateTemplate = {
            name: '',
            html: '',
            folder_id: folderId
        };
        let templatePromises = [];
        let templateId;
        if (updateData.booked) {
            updateTemplate.html = updateData.booked.html;
            templateId = updateData.booked.templateId;
        }
        else {
            updateTemplate.html = 'New template';
            templateId = false;
        }
        updateTemplate.name = 'bookedTemplate';
        templatePromises.push(this.handleTemplate(templateId, updateTemplate));
        if (updateData['check-in']) {
            updateTemplate.html = updateData['check-in'].html;
            templateId = updateData['check-in'].templateId;
        }
        else {
            updateTemplate.html = 'New template';
            templateId = false;
        }
        updateTemplate.name = 'beforeTemplate';
        templatePromises.push(this.handleTemplate(templateId, updateTemplate));
        if (updateData['check-out']) {
            updateTemplate.html = updateData['check-out'].html;
            templateId = updateData['check-out'].templateId;
        }
        else {
            updateTemplate.html = 'New template';
            templateId = false;
        }
        updateTemplate.name = 'afterTemplate';
        templatePromises.push(this.handleTemplate(templateId, updateTemplate));
        if (updateData.cancellation) {
            updateTemplate.html = updateData.cancellation.html;
            templateId = updateData.cancellation.templateId;
        }
        else {
            updateTemplate.html = 'New template'; //templateId
            templateId = false;
        }
        updateTemplate.name = 'cancelTemplate';
        templatePromises.push(this.handleTemplate(templateId, updateTemplate));
        if (!updateData.listId) {
            const list = await this.mailchimp.createList({
                "name": updateData.contact.name,
                "contact": {
                    "company": updateData.contact.name,
                    "address1": updateData.contact.address,
                    "address2": "",
                    "city": "",
                    "state": "",
                    "zip": "",
                    "country": "",
                    "phone": ""
                },
                "permission_reminder": "Mailchimp generated",
                "campaign_defaults": {
                    "from_name": updateData.contact.name,
                    "from_email": updateData.contact.email,
                    "subject": "",
                    "language": "en"
                },
                "email_type_option": true
            });
        }
        await Promise.all(templatePromises);
        return await super.update(itemId, updateData);
    }
    // check the workings then maybe add a toJSON method
    /**

     * @param {IResortCustomer} createData
     * @param queryObj
     * @returns {Promise<any>}
     */
    async createWithUniqueCheck(createData, queryObj) {
        await this.querySingle(queryObj);
        let templateData = {
            name: '',
            html: 'New template',
            folder_id: ''
        };
        let list;
        try {
            list = await this.mailchimp.createList({
                "name": createData.contact.name,
                "contact": {
                    "company": createData.contact.name,
                    "address1": createData.contact.address,
                    "address2": "",
                    "city": "",
                    "state": "",
                    "zip": "",
                    "country": "",
                    "phone": ""
                },
                "permission_reminder": "Mailchimp generated",
                "campaign_defaults": {
                    "from_name": createData.contact.name,
                    "from_email": createData.contact.email,
                    "subject": "",
                    "language": "en"
                },
                "email_type_option": true
            });
        }
        catch (err) {
            console.error(err);
            return;
        }
        createData.listId = list.id;
        const folder = await this.mailchimp.createFolder(createData.contact.name);
        templateData.folder_id = folder.id;
        templateData.name = 'bookedTemplate';
        const booked = await this.mailchimp.createTemplate(templateData);
        templateData.name = 'beforeTemplate';
        const before = await this.mailchimp.createTemplate(templateData);
        templateData.name = 'afterTemplate';
        const after = await this.mailchimp.createTemplate(templateData);
        templateData.name = 'cancelTemplate';
        const cancel = await this.mailchimp.createTemplate(templateData);
        createData.templateFolderId = folder.id;
        createData.booked = {
            templateId: booked.id,
            html: templateData.html,
            toUse: false
        };
        createData['check-in'] = {
            templateId: before.id,
            html: templateData.html,
            toUse: false
        };
        createData['check-out'] = {
            templateId: after.id,
            html: templateData.html,
            toUse: false
        };
        createData.cancellation = {
            templateId: cancel.id,
            html: templateData.html,
            toUse: false
        };
        return await super.create(createData);
    }
}
exports.CustomerDao = CustomerDao;
//# sourceMappingURL=resort-customer.dao.js.map