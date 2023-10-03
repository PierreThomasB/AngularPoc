import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Apod } from 'src/domains/apod';
import { ApodCardComponent } from '../apod-card/apod-card.component';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  apods :Apod[] = [];
  dataReady : boolean = false;

  constructor(private dataService: DataService){

    
  }
  ngOnInit(): void {
    this.dataService.getBy10().subscribe(response => {
      response.forEach((element: { [x: string]: string; }) => {
       let apod = new Apod(element["title"], element["explanation"],element["hdUrl"]);
       this.apods.push(apod);
       
      });
      console.log(this.apods);
    });

    this.dataReady = true;



  }

}
