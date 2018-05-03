"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mailchimp = require("mailchimp-api-v3");
const moment = require("moment-timezone");
class MailchimpDao {
    constructor(apiKey) {
        this.mailchimpApiKey = '18840b9db28b4010714c424e4202d0ed-us17';
        this.mailchimp = new Mailchimp(apiKey || this.mailchimpApiKey);
    }
    isComplete(campaign) {
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
    getLists() {
        return this.mailchimp.get('/lists?email=birkir@ysland.is');
    }
    getListsByEmail(email) {
        return this.mailchimp.get(`/lists?email=${email}`);
    }
    getListById(listId) {
        return this.mailchimp.get(`/lists/${listId}`);
    }
    async getTotalCampaignCount() {
        let total = await this.mailchimp.get('/campaigns');
        return total['total_items'];
    }
    async getCampaigns() {
        const total = await this.getTotalCampaignCount();
        return this.mailchimp.get(`/campaigns?count=${total}`);
    }
    async queryCampaignsByDate(date) {
        const time = moment.tz(date, 'Atlantic/Reykjavik').toISOString();
        const total = await this.getTotalCampaignCount();
        return this.mailchimp.get(`/campaigns?count=${total}&since_send_time=${time}`);
    }
    async getCampaignsForBooking(bookingCreationDate) {
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
    getAutomations() {
        return this.mailchimp.get('/automations');
    }
    createList(listObject) {
        return this.mailchimp.post('/lists', listObject);
    }
    updateList(listId, listObject) {
        return this.mailchimp.patch(`/lists/${listId}`, listObject);
    }
    async addMemberList(customer, contact) {
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
        }
        catch (err) {
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
    createCampaign(campaign) {
        return this.mailchimp.post('/campaigns', campaign);
    }
    updateCampaign(campaignUpdate, campaignId) {
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
    performCampaignAction(campaignId, action, options) {
        let scheduleDate;
        if (action === 'schedule') {
            try {
                scheduleDate = new Date(options['schedule_time']);
                this.setScheduleMinutes(scheduleDate);
                options['schedule_time'] = scheduleDate;
            }
            catch (error) {
                console.error(error);
                throw (error);
            }
        }
        return this.mailchimp.post(`/campaigns/${campaignId}/actions/${action}`, options);
    }
    setScheduleMinutes(date) {
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
    createAndScheduleCampaign(campaignObject, date) {
        this.setScheduleMinutes(date);
        return new Promise((resolve, reject) => {
            this.createCampaign(campaignObject)
                .then(createdCampaign => {
                this.performCampaignAction(createdCampaign.id, 'schedule', {
                    schedule_time: date
                })
                    .then(resolve)
                    .catch(reject);
            });
        });
    }
    async clearCampaigns() {
        const condition = new Date().getDate();
        const campaigns = (await this.getCampaigns()).campaigns;
        let removePromises = [];
        if (campaigns && campaigns.length) {
            for (let i in campaigns) {
                let campaign = campaigns[i];
                let check = new Date(campaign.send_time).getDate();
                if (condition - check > 365) {
                    removePromises.push(this.deleteCompleteCampaign(campaign));
                }
            }
        }
        return await Promise.all(removePromises);
    }
    deleteCampaign(campaignId) {
        return this.mailchimp.delete(`/campaigns/${campaignId}`);
    }
    async deleteCompleteCampaign(campaignObj) {
        await this.deleteCampaign(campaignObj.id);
        return this.mailchimp.delete(`/lists/${campaignObj.recipients.list_id}`);
    }
    getReports() {
        return this.mailchimp.get('/reports');
    }
    getReportsFor(campaignId) {
        return this.mailchimp.get(`/reports/${campaignId}`);
    }
    getTemplateById(templateId) {
        return this.mailchimp.get(`/templates/${templateId}`);
    }
    getTemplateContentById(templateId) {
        return this.mailchimp.get('/file-manager/files'); // /templates/' + templateId + '/default-content'
    }
    createTemplate(templateData) {
        return this.mailchimp.post('/templates', templateData);
    }
    updateTemplate(templateId, templateData) {
        return this.mailchimp.patch(`/templates/${templateId}`, templateData);
    }
    removeTemplate(templateId) {
        return this.mailchimp.delete(`/templates/${templateId}`);
    }
    getFolders() {
        return this.mailchimp.get('/template-folders/');
    }
    getFolderById(id) {
        return this.mailchimp.get(`/template-folders/${id}`);
    }
    createFolder(folderName) {
        return this.mailchimp.post('/template-folders', { name: folderName });
    }
    removeFolder(folderId) {
        return this.mailchimp.delete(`/template-folders/${folderId}`);
    }
    removeList(listId) {
        return this.mailchimp.delete(`/lists/${listId}`);
    }
    createAndTestCampaign(templateData, emails) {
        return new Promise((resolve, reject) => {
            this.updateTemplate(templateData.templateId, templateData.data.template)
                .then(() => {
                this.createCampaign({
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
                        }
                        else {
                            reject(err);
                        }
                    });
                })
                    .catch(err => reject(err));
            })
                .catch(err => reject(err));
        });
    }
    async clearTestCampaignsByTemplateUsed(tempId) {
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
exports.MailchimpDao = MailchimpDao;
//# sourceMappingURL=mailchimp.dao.js.map