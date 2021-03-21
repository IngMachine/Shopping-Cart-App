export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public uid: string;

    constructor( firstName: string, lastName: string, email: string, uid: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.uid = uid;
    }
}
