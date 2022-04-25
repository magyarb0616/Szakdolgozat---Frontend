import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private httpClient: HttpClient) {  }
  


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  async createMatch(matchid: string):Promise<Observable<any>>{
  const reqheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })
  console.log(reqheaders);
  console.log(localStorage.getItem("token"));

  return this.httpClient.post(environment.apiKey+"match?id="+matchid,this.httpOptions)
}

getLikedPets():Observable<any>{
  return this.httpClient.get(environment.apiKey+"/match",this.httpOptions)
}

//wtf már

}
