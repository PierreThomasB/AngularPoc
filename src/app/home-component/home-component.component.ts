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
    this.dataService.getAllApod().subscribe(response => {
      console.log(response);
      response.forEach((element: { [x: string]: string; }) => {
       let apod = new Apod(element["title"], element["explanation"],element["hdUrl"]);

       let apodComp  = new ApodCardComponent(apod);

       const divCont = document.getElementById("apodContainer");
      


       console.log(apod);
       this.apods.push(apod);
       
      });
    });

    this.dataReady = true;



  }

}
