import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {

  }

  counterDisplay: number | undefined

  ngOnInit() {
    this.store.select('counter').subscribe(data => {
      this.counterDisplay = data.counter
    })
  }
}
