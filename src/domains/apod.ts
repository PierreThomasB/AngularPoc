export class Apod {
    titre: string;
    explication : string;
    url:string;

    constructor(titre:string , explication : string , url:string ){
        this.titre = titre
        this.explication = explication;
        this.url = url;
    }



    descSimp() : string {return this.explication.slice(0,100)+"..."};
        
    


}