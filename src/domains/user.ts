import { Apod } from "./apod";

export class User {
    id:string;
    email: string;
    lastname: string;
    firstname:string;
    country:string;
    apods:[string];

    constructor(id:string , email:string  , lastname:string,firstname : string , country : string , apodes : [string]){
        this.id = id;
        this.email = email
        this.lastname = lastname;
        this.firstname = firstname;
        this.country = country;
        this.apods = apodes;
    }
}