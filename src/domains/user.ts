export class User {
    id:string;
    email: string;
    lastName: string;
    firstName:string;
    country:string;

    constructor(id:string , email:string  , lastname:string,firstname : string , country : string){
        this.id = id;
        this.email = email
        this.lastName = lastname;
        this.firstName = firstname;
        this.country = country;
    }



}