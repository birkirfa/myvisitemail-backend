import { GenericDao } from '../generic.dao';
import { RemovedCustomerModel } from './removed-customer.model';

export class RemovedCustomerDao extends GenericDao {

    constructor() {
        const removedCustomer = new RemovedCustomerModel(false);
        super(removedCustomer.getSchema(), 'removed-customers');
    }

    filterList() {
        const results = this.getAll();
        const condition = new Date().setDate(new Date().getDate() - 7);
        const returnValues = [];
        for (const key in results) {
            if (results[key]) {
                const deletion = results[key];
                if (deletion.removedDate && deletion.removedDate < condition) {
                    this.remove(deletion[key]._id);
                } else {
                    returnValues.push(deletion);
                }
            }
        }
        return returnValues;
    }
}
