import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Apod } from 'src/domains/apod';

@Component({
  selector: 'app-apod-info',
  templateUrl: './apod-info.component.html',
  styleUrls: ['./apod-info.component.css']
})
export class ApodInfoComponent implements OnInit{


  constructor(private route: ActivatedRoute ,private dataService : DataService){
  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.dataService.getById(id).subscribe(response => {
        let apod = new Apod(response["title"], response["explanation"],response["hdUrl"]);

        console.log(apod);
      })
    }
  }

}
