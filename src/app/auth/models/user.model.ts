export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public uid: string;

    constructor( obj: DataObj ) {
        this.firstName = obj && obj.firstName;
        this.lastName = obj && obj.lastName;
        this.email = obj && obj.email;
        this.uid = obj && obj.uid;
    }
}

export interface DataObj {
    firstName: string;
    lastName: string;
    uid: string;
    email: string;
}