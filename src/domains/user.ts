import { Apod } from "./apod";

export class User {
    id:string;
    email: string;
    lastName: string;
    firstName:string;
    country:string;
    apods:[Apod];

    constructor(id:string , email:string  , lastname:string,firstname : string , country : string , apodes : [Apod]){
        this.id = id;
        this.email = email
        this.lastName = lastname;
        this.firstName = firstname;
        this.country = country;
        this.apods = apodes;
    }
}