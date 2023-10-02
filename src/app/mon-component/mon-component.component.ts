import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mon-component',
  templateUrl: './mon-component.component.html',
  styleUrls: ['./mon-component.component.css']
})
export class MonComponentComponent {

  constructor(private router : Router){

  }

  titre:string = "Pierre est une merde ";
  description:string = "";


  afficherTitre(): string {
    return this.titre;
  }

  goToSecond(){
    
    this.router.navigate(["/second/:id"])

  }

}
