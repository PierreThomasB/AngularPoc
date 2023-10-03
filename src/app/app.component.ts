import { Component, OnInit } from '@angular/core';

import { Apod } from 'src/domains/apod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent  {
  apods: Apod[] | undefined;

constructor(){}



  ngOnInit(): void {
   
  }
 

  
}
