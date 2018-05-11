import * as NotificationTypes from './NotificationTypes';

export default class Notification {

    constructor(_type = '', _data = null){
        this.type = _type;
        this.data = _data;
        this.timestamp = + new Date();
    }

    isValid() {
        switch(this.type) {
            // validates all fields for new identity request
            case NotificationTypes.REQUEST_NEW_IDENTITY:
                return this.data &&
                    this.data.domain &&
                    this.data.application &&
                    this.data.fields.personal &&
                    this.data.fields.personal.length &&
                    this.data.fields.account &&
                    this.data.fields.account.blockchain &&
                    this.data.fields.account.host &&
                    this.data.fields.account.port;
            default:
                return !!this.data;
        }
    }

    static placeholder(){ return new Notification(); }
    static fromJson(json){ return Object.assign(this.placeholder(), json); }
}