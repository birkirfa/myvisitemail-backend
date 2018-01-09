import * as Mailchimp from 'mailchimp-api-v3';
import { IMailLists, IMailingList, IMailchimpTemplateFolder, IMailchimpTemplate } from './mailchimp.model';
import { IResortCustomerTemplate } from '../resort-customers/resort-customers.model';

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
        return this.mailchimp.get('/lists');
    }

    public getListById(listId: string): Promise<IMailingList> {
        return this.mailchimp.get('/lists/' + listId);
    }

    public getCampaigns() {
        return this.mailchimp.get('/campaigns');
    }

    public async getCampaignsForBooking(bookingId) {
        let data = await this.mailchimp.get('/campaigns');
        let regExp = new RegExp(bookingId);
        let campaignArray = [];
        for (let i in data['campaigns']) {
            let campaign = data['campaigns'][i];
            if (campaign.settings && regExp.test(campaign.settings.title)) {
                campaignArray.push(campaign);
            }
        }
        return campaignArray;
    }

    public getAutomations() {
        return this.mailchimp.get('/automations');
    }

    public createList(listObject: any) {
        return this.mailchimp.post('/lists', listObject);
    }

    public updateList(listId: string, listObject: any) {
        return this.mailchimp.patch('/lists/' + listId, listObject);
    }

    public addMemberToList (listId: string, memberObj: any) {
        return this.mailchimp.post('/lists/' + listId + '/members', memberObj);
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
            title: "Mailchimp api test",                        mandatory
            template_id: 1309,                                  mandatory
            from_name: 'Jacek',                                 mandatory
            reply_to: 'jacek.bednarczyk.softiti@gmail.com',     mandatory
            subject_line: 'Mailchimp api test'                  mandatory
        }
    }
     */
    public createCampaign(campaign: any) {
        return this.mailchimp.post('/campaigns', campaign);
    }

    public updateCampaign(campaignUpdate: any, campaignId: string) {
        return this.mailchimp.patch('/campaigns/' + campaignId, campaignUpdate);
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
    public performCampaignAction(campaignId: string, action: string, options: object) {
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
     * {"schedule_time":"2017-02-04T19:13:00+00:00","timewarp":"false","batch_delay":"false"}
     * @param {Object} campaignObject
     * @param {Date} date
     */
    public createAndScheduleCampaign(campaignObject: any, date: Date) {
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

    public async clearCampaigns () {
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

    public deleteCampaign(campaignId: string) {
        return this.mailchimp.delete('/campaigns/' + campaignId)
    }

    private async deleteCompleteCampaign (campaignObj) {
        await this.deleteCampaign(campaignObj.id)
        return this.mailchimp.delete('/lists/' + campaignObj.recipients.list_id);
    }

    public getReports() {
        return this.mailchimp.get('/reports');
    }

    public getReportsFor(campaignId: string) {
        return this.mailchimp.get(`/reports/${campaignId}`);
    }

    public getReportsByCampaignId(campaignId: string) {
        return this.mailchimp.get('/reports/' + campaignId);
    }

    public getTemplateById (templateId: string) {
        return this.mailchimp.get('/templates/' + templateId);
    }

    public getTemplateContentById (templateId: string) {
        return this.mailchimp.get('/file-manager/files');    // /templates/' + templateId + '/default-content'
    }

    public createTemplate (templateData: IResortCustomerTemplate) {
        return this.mailchimp.post(
            '/templates', templateData
        );
    }

    public updateTemplate (templateId, templateData: IResortCustomerTemplate) {
        return this.mailchimp.patch(
            '/templates/' + templateId, templateData
        );
    }

    public removeTemplate (templateId: string) {
        return this.mailchimp.delete('/templates/' + templateId);
    }

    public getFolders () {
        return this.mailchimp.get('/template-folders/');
    }

    public getFolderById (id: number) {
        return this.mailchimp.get('/template-folders/' + id);
    }

    public createFolder (folderName: string) {
        return this.mailchimp.post(
            '/template-folders', {name: folderName}
        );
    }

    public removeFolder (folderId) {
        return this.mailchimp.delete('/template-folders/' + folderId);
    }

    public createAndTestCampaign (templateData, emails) {
        return new Promise <any> ((resolve, reject) => {
            this.updateTemplate(templateData.templateId, templateData.data)
                .then(() => {
                    this.createCampaign(
                        {
                            type: 'regular',
                            settings: {
                                title: "Test campaign",
                                template_id: Number.parseInt(templateData.templateId),
                                from_name: 'Test sender',
                                reply_to: 'mveDevs@gmail.com',
                                subject_line: 'Test campaign'
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

    public async clearTestCampaignsByTemplateUsed (tempId: number) {
        let campaigns = await this.getCampaigns();
        let promises = [];
        for (let key in campaigns) {
            let campaign = campaigns[key];
            if (campaign.settings &&
                campaign.settings.template_id === tempId &&
                campaign.settings.title === "Test campaign") {
                promises.push(this.deleteCampaign(campaign.id));
            }
        }
        return await Promise.all(promises);
    }
}
