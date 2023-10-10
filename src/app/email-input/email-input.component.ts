import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent {


  @Output() emailChanged: EventEmitter<string> = new EventEmitter<string>();




  emailControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor(){}


  onInputChanged() : void {
    if(this.emailControl.value !== null && this.emailControl.valid){
      this.emailChanged.emit(this.emailControl.value);
    }
  }

}
