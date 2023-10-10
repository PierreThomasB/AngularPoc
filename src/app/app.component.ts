import { Component, OnInit } from '@angular/core';
import { User } from 'src/domains/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent  {

   user:User|undefined;

constructor(){}



  ngOnInit(): void {
    const str  = localStorage.getItem("user");
    if(str !== null){
      
      let usrObj = JSON.parse(str);
      this.user = Object.assign(usrObj , User);
      console.log(this.user)
    }else {
      console.error("La clé 'utilisateur' n'existe pas dans le LocalStorage.");
    }
   
  }
}
