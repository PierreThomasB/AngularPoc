import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;


  constructor( private formBuilder: FormBuilder , private authService : AuthService){


    this.registerForm = this.formBuilder.group({
      firstname: ['' , [Validators.required]],
      lastname: ['' ,  Validators.required],
      country:['',Validators.maxLength(2)],
      email:['',[Validators.email , Validators.required]],
      password:['',[Validators.required , Validators.minLength(4)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordValidator
    });


    };
  


  passwordValidator(formGroup: FormGroup):boolean {
    if(formGroup.get("password") !== null && formGroup.get('confirmPassword') !== null){
      return formGroup.get("password") === formGroup.get('confirmPassword');
    }
    return false;
  }


  register():void{
    const param = {firstname : this.registerForm.value.firstname,lastname : this.registerForm.value.firstname,country : this.registerForm.value.firstname,email : this.registerForm.value.email,password:this.registerForm.value.password};

    this.authService.register(param).subscribe( response => {
      console.log(response);
    }
    )

    


  }





}
