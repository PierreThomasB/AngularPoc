import {Component} from '@angular/core';
import {User} from "../../domains/user";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  user: User | undefined;

  constructor() {
  }

  ngOnInit(): void {
    const str = localStorage.getItem("user");
    if (str !== null) {

      let usrObj = JSON.parse(str);
      this.user = Object.assign(usrObj, User);
      console.log(this.user)
    } else {
      console.error("La clé 'utilisateur' n'existe pas dans le LocalStorage.");
    }

  }

}
