import {Component, OnInit} from '@angular/core';
import {User} from 'src/domains/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  {

   user:User|undefined;

constructor(){}



  ngOnInit(): void {
  }
}
