import { Component , EventEmitter, Input, Output } from '@angular/core';
import { Apod } from 'src/domains/apod';
import {createAction, props} from "@ngrx/store";

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.css']
})
export class ApodCardComponent {
  @Input() apod!: Apod;
  @Output() event: EventEmitter<Apod> = new EventEmitter<Apod>();


  constructor(){
  }
  onApodClick(){
    this.event.emit(this.apod);
  }

}
export const like = createAction(
  '[Home Page] Like',
  props<{username: string, password: string}>
)
