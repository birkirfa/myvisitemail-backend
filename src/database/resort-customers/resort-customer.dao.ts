import { BokunDAO } from '../bokun/bokunDAO';
import { MailchimpDao } from '../mailchimp/mailchimp.dao';
import {Customer} from "./customer";

export class CustomerDao {
    private bokun: BokunDAO;
    private mailchimp: MailchimpDao;
    constructor () {
        this.mailchimp = new MailchimpDao('');
        this.bokun = new BokunDAO();
    }

    private getRoomCount (products) {
        let rooms = 0;
        for (let key in products) {
            let product = products[key];
            let item = product[product['productCategory'].toLowerCase()];
            for (let key in item['roomTypes']) {
                let roomType = item['roomTypes'][key];
                rooms += roomType['roomCount'];
            }
        }
        return rooms;
    }

    getLatestReportByListId (listId, reports) {
        let listReports = reports.filter(val => val.list_id === listId);
        listReports.sort((reportA, reportB) => {
            return new Date(reportA.send_time).getTime() < new Date(reportB.send_time).getTime();
        });
        return listReports;
    }

    async getCustomerList () {
        const productLists = await this.bokun.getProductList();
        let mailingLists = await this.mailchimp.getLists();
        let mailReports = await this.mailchimp.getReports();
        mailReports = mailReports.reports;
        mailingLists = mailingLists.lists;
        return await Promise.all(productLists['map'](async value => {
                let mailList;
                for (let key in mailingLists) {
                    if (mailingLists[key]['name'] === value['title']) {
                        mailList = mailingLists[key];
                        break;
                    }
                }
                let products = await this.bokun.getProductsFromListById(value['id']);
                products = products['items'];
                if (mailList) {
                    let listReports = this.getLatestReportByListId (mailList.id, mailReports);
                    return new Customer(
                        mailList.contact.company,
                        'POSITION?',
                        mailList.campaign_defaults.from_email,
                        this.getRoomCount (products),
                        listReports,
                        'INVOICE?'
                    );
                } else {
                    return new Customer(
                        value['title'],
                        '',
                        '',
                        '',
                        [],
                        '');
                }
        }));
    }
}