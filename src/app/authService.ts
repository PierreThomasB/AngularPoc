import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://spacelab.henni.be/';

  constructor(private http: HttpClient) { }




  //LOGIN 

  login(parametre: object): Observable<any> {
    return this.http.post(`${this.apiUrl}user/signin`, parametre);
  }


  register(parametre: object) : Observable<any>{
    return this.http.post(`${this.apiUrl}user/signup`,parametre);
  }


  // Autres méthodes pour l'inscription, vérification de l'état de connexion, etc.
}
