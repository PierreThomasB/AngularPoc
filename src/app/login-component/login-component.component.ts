import { Component } from '@angular/core';
import { AuthService } from '../authService';
import { FormBuilder, FormGroup  , Validators} from '@angular/forms';
import { User } from 'src/domains/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  userForm: FormGroup;

  desactivate : boolean = true;

  constructor(private authService: AuthService , private formBuilder: FormBuilder , private router : Router){

    this.userForm = this.formBuilder.group({
      email: ['' , [Validators.required , Validators.email]],
      password: ['' ,  Validators.required],
    });
  }

  login() {
    const param = {email : this.userForm.value.email, password : this.userForm.value.password}
  
    this.authService.login(param).subscribe(response => {

      if(response.user !== undefined){
        localStorage.setItem('access_token', response.token);
        let userObj: object = response.user;
        const user = Object.assign(userObj,User);
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(["home"]);
       
      }

      console.log(response);
      // Gérer la réponse du serveur, rediriger vers la page d'accueil, etc.
    }, error => {
      console.log(error);
    });
  }

}
