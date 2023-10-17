import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from 'src/domains/user';
import { Apod } from 'src/domains/apod';
import {Store} from "@ngrx/store";
import {decrement, increment} from "../shared/store/counter.actions";

@Component({
  selector: 'app-my-apod',
  templateUrl: './my-apod.component.html',
  styleUrls: ['./my-apod.component.css']
})
export class MyApodComponent implements OnInit {


  user:User  | undefined ;

  apods :Apod[] = [];
  dataReady : boolean = false;



  constructor(private dataService: DataService, private store:Store<{counter:{counter:number}}>){}
  OnIncrement() {
    this.store.dispatch(increment())
  }
  OnDecrement() {
    this.store.dispatch(decrement())
  }
  ngOnInit(): void {
    const userStr = localStorage.getItem("user");
    if(userStr !== null){
      this.user = JSON.parse(userStr);
      this.user?.apods.forEach(apod => {
        this.dataService.getByDate(apod).subscribe(response => {
          console.log(response);
          let apod = new Apod(response["title"], response["explanation"],response["hdUrl"])
          this.apods.push(apod);
        })
      })
      this.dataReady = true;
    }
  }
}
