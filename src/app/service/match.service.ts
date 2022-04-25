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
  return this.httpClient.post(environment.apiKey+"/match?id="+matchid,this.httpOptions)
}

  deleteMatch(matchid: string):Observable<any>{
    return this.httpClient.post(environment.apiKey+"/match/delete?id="+matchid,this.httpOptions)
  }

  getLikedPets():Observable<any>{
    return this.httpClient.get(environment.apiKey+"/match",this.httpOptions)
  }

//wtf már

}
