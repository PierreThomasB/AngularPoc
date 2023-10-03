import { Component , Input } from '@angular/core';
import { Apod } from 'src/domains/apod';

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.css']
})
export class ApodCardComponent {
  @Input()
  apod!: Apod;
}
