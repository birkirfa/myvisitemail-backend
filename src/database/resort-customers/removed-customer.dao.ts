import {RemovedCustomerModel} from "./removed-customer";
import {GenericDao} from "../generic.dao";

export class RemovedCustomerDao extends GenericDao {

    constructor() {
        const removedCustomer = new RemovedCustomerModel(false);
        super(removedCustomer.getSchema(), 'removed-customers');
    }

    async filterList () {
        let results = await this.getAll();
        let condition = new Date().setDate(new Date().getDate()-7);
        let returnValues = [];
        for (let key in results) {
            let deletion = results[key];
            if (deletion.removedDate && deletion.removedDate < condition) {
                await this.remove(deletion[key]._id);
            } else {
                returnValues.push(deletion);
            }
        }
        return returnValues;
    }
}