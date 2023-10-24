import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "https://spacelab.henni.be/"; 

  private apiKey: string = "pierrePassWord";

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    })
  };

  // Requête GET
  getBy10(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/apod?count=10` );
  }


  getByDate(date:string) : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/apod/`+date);
  }

  getById(id:string) : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/apod/`+id);
  }


 

  /*
  // Requête POST
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/endpoint`, data);
  }

  // Requête PUT
  putData(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/endpoint`, data);
  }

  // Requête DELETE
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/endpoint/${id}`);
  }

  */
}
