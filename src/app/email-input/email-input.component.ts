import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent {


  @Output()isCorrect=  EventEmitter<string | null> = new EventEmitter<string | null>();

  emailInput:string = "";
  isValidEmail: boolean = true;


  constructor(){}


  onInputChange($event: Event) : void {

    if(this.emailInput.match("^\S+@\S+$")){
     
      this.isCorrect.emit(this.emailInput);
    }else{
      this.isCorrect.emit("");
    }
    }

  



}
