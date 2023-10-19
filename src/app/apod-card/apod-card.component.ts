import { Component , EventEmitter, Input, Output } from '@angular/core';
import { Apod } from 'src/domains/apod';
import {createAction, props, Store} from "@ngrx/store";
import {decrement, increment} from "../shared/store/counter.actions";

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.css']
})
export class ApodCardComponent {
  @Input() apod!: Apod;
  @Output() event: EventEmitter<Apod> = new EventEmitter<Apod>();


  constructor(private store:Store<{counter:{counter:number}}>){
  }
  onApodClick(){
    this.event.emit(this.apod);
    this.OnIncrement()
  }

  OnIncrement() {
    this.store.dispatch(increment())
  }
  OnDecrement() {
    this.store.dispatch(decrement())
  }

}
export const like = createAction(
  '[Home Page] Like',
  props<{username: string, password: string}>
)
