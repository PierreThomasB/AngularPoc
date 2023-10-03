import { Component } from '@angular/core';
import { Apod } from 'src/domains/apod';

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.css']
})
export class ApodCardComponent {
  imageUrl: string;
  description:string;
  titre: string;

  constructor(apod: Apod){
    this.imageUrl = apod.url;
    this.description = apod.descSimp();
    this.titre = apod.titre;
  }
  
}
