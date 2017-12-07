import * as Mailchimp from 'mailchimp-api-v3';

export class MailchimpDao {
    private mailchimpApiKey = '579e812841299b40988a9bd905d2ac9f-us17';
    private mailchimp: Mailchimp;

    constructor(apiKey: string) {
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

    public getLists() {
        return this.mailchimp.get('/lists');
    }

    public getListById(listId: string) {
        return this.mailchimp.get('/lists/' + listId);
    }

    public getCampaigns() {
        return this.mailchimp.get('/campaigns');
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

        this.createCampaign(campaignObject)
            .then(createdCampaign => {
                this.performCampaignAction(createdCampaign.id, 'schedule', {
                    schedule_time: date
                })
                    .then(res => {
                        console.log(res);
                    })
                    .error(err => {
                        console.error(err);
                    });
            });
    }

    public deleteCampaign(campaignId: string) {
        return this.mailchimp.delete('/campaigns/' + campaignId);
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
}
