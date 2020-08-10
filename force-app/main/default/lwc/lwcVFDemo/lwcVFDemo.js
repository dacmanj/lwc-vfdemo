import {
    LightningElement,
    api,
    track,
    wire
} from 'lwc';
import fetchsObjectData from '@salesforce/apex/lwcVFDemoController.fetchsObjectData';

export default class LwcVFDemo extends LightningElement {
    @api objectName = "Account";
    @api accountId = "oid";
    @track sObjData = [];

    get whereClause() {
        return `WHERE AccountId = '${this.accountId}'`;
    }

    @wire(fetchsObjectData, {
        obName: "$objectName",
        whereClause: "$whereClause"
    })
    wiredResult(result) {
        if (result.data) {
            this.sObjData = result.data;
        }
    }
}