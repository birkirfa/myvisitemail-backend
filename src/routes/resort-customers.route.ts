import * as Express from 'express';
import * as bodyParser from 'body-parser';
import { IResortCustomer, IResortCustomerDetails } from '../database/resort-customers/resort-customers.model';
import { CustomerDao } from '../database/resort-customers/resort-customer.dao';

export class ResortCustomersRoute {
    router: Express.Router;
    jsonParser = bodyParser.json();
    dao: CustomerDao;

    constructor() {
        this.dao = new CustomerDao();
        this.router = Express.Router();

        this.router.get('/all', async (req, res) => {
            let result;
            try {
                result = await this.dao.getCustomerList();
                // mockResortCustomersList();
            } catch (err) {
                console.error(err);
                res.status(500).send('Something went wrong');
                return;
            }
            res.status(200).json(result);
        });
        this.router.get('/detail', (req, res) => {
            res.status(400).send('Resort id missing!');
        });
        this.router.get('/detail/:resortId', (req, res) => {
            const resortId = req.params.resortId;
            const result = this.mockResortCustomerDetails(resortId);
            if (result) {
                res.status(200).json(result);
            } else {
                res.status(500).json('Resort not found!');
            }
        });
    }

    private mockResortCustomerDetails(id: string) {
        const mock = this.mockResortCustomersList().find(r => r.id === id);

        if (mock) {
            mock['phone'] = '+354 588 5522';
            mock['emailsSent'] = 3814;
            mock['emailsOpened'] = 2123;
            mock['bounceRate'] = 0.12;
            mock['cancellations'] = 12;
            mock['lastWeek'] = 223;
        }

        return mock;
    }

    private mockResortCustomersList(): IResortCustomer[] {
        return [
            {
                id: '1',
                name: 'Gistihús Gumma',
                position: 'Guesthouse',
                email: 'gummi69@simnet.is',
                rooms: 4,
                lastSent: '2017/01/12',
                invoice: '$860'
            },
            {
                id: '2',
                name: 'Hótel Harpa',
                position: 'Hotel',
                email: 'sigrune@harpa.is',
                rooms: 342,
                lastSent: '2017/01/25',
                invoice: '$112,000'
            },
            {
                id: '3',
                name: 'Hótel Hellnir',
                position: 'Hotel',
                email: 'hellnir@hellnir.is',
                rooms: 61,
                lastSent: '2017/04/25',
                invoice: '$320'
            },
            {
                id: '4',
                name: 'Hótel Rangá',
                position: 'Guesthouse',
                email: 'gydasol@ranga.is',
                rooms: 63,
                lastSent: '2017/07/25',
                invoice: '$1700'
            },
            {
                id: '5',
                name: 'Hótel Venus',
                position: 'Guesthouse',
                email: 'elli@hotmale.com',
                rooms: 12,
                lastSent: '2017/03/29',
                invoice: '$4330'
            },
            {
                id: '6',
                name: 'Lónkot Bucolic Resort',
                position: 'Guesthouse',
                email: 'lonkot@lonkot.is',
                rooms: 7,
                lastSent: '2007/11/28',
                invoice: '$162'
            },
            {
                id: '7',
                name: 'Snorralaug',
                position: 'Hotel',
                email: 'snorri@betel.com',
                rooms: 12,
                lastSent: '2017/12/22',
                invoice: '$8690'
            },
            {
                id: '8',
                name: 'Snæfell Hotel',
                position: 'Hotel',
                email: 'snaefell@snaefell.is',
                rooms: 51,
                lastSent: '2017/11/13',
                invoice: '$183,000'
            }
        ];
    }
}
