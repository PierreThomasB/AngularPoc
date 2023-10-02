import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    const id:string|null = this.route.snapshot.paramMap.get("id");

    console.log("second composant voila mon id "+id);
  }

}
