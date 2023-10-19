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
  isLiked:boolean

  constructor(private store:Store<{counter:{counter:number}}>){
    this.isLiked = false
  }
  onApodClick(){
    this.event.emit(this.apod);
    this.isLiked ? this.OnDecrement() : this.OnIncrement()
    this.isLiked = !this.isLiked
  }
  OnIncrement() { this.store.dispatch(increment()) }
  OnDecrement() { this.store.dispatch(decrement()) }
}
