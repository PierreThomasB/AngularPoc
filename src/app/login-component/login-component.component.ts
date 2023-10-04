import { Component } from '@angular/core';
import { AuthService } from '../AuthService';
import { FormBuilder, FormGroup  , Validators} from '@angular/forms';
import { User } from 'src/domains/user';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  user: User = new User('', '');
  userForm: FormGroup;

  constructor(private authService: AuthService , private formBuilder: FormBuilder){

    this.userForm = this.formBuilder.group({
      email: ['' , [Validators.required , Validators.email]],
      password: ['' ,  Validators.required],
    });
  }

  login() {
    let param = {email : this.user.email , password : this.user.password}
    this.authService.login(JSON.stringify(param)).subscribe(response => {

      console.log(response);
      // Gérer la réponse du serveur, rediriger vers la page d'accueil, etc.
    }, error => {
      console.log(error);
    });
  }

}
