import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://spacelab.henni.be/';

  constructor(private http: HttpClient) { }

  singup(parameters: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/signin`, parameters);
  }




  //LOGIN 

  login(parametre: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/signin`, parametre);
  }


  // Autres méthodes pour l'inscription, vérification de l'état de connexion, etc.
}
