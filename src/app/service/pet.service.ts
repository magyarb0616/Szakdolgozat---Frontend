import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable} from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

getRandomPets(): Observable<any>{
  return this.httpClient.get(environment.apiKey+"/pet/random",this.httpOptions)
}

getMypets():Observable<any>{
  return this.httpClient.get(environment.apiKey+"/pet/mypets",this.httpOptions).pipe(
    catchError((err) =>{
      console.log(err);
      throw err;
    })
  )
}





}
