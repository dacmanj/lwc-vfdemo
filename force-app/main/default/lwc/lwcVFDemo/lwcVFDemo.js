import {
    LightningElement,
    api,
    track,
    wire
} from 'lwc';
import fetchsObjectData from '@salesforce/apex/lwcVFDemoController.fetchsObjectData';

export default class LwcVFDemo extends LightningElement {
    @api objectName = 'Account';
    @track sObjData = [];

    @wire(fetchsObjectData, {
        obName: '$objectName'
    })
    wiredResult(result) {
        if (result.data) {
            this.sObjData = result.data;
        }
    }
}