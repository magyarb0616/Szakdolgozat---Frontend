import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  public getUser():Observable<any>{
    return this.httpClient.get(environment.apiKey+"/user?id="+localStorage.getItem("id"),this.httpOptions)
  }

  public updateUser(data: any){
    const headers = {'content-type': 'application/json'}
    const body = {
      "id": localStorage.getItem("id"),
      "username": data.username,
      "email": data.email,
      "surname": data.surname,
      "firstname": data.firstname,
      "phone": data.phone,
      "cityId": data.city,
    }
    //console.log(body);
    return this.httpClient.post(environment.apiKey+"/user/update",body,{ headers, responseType: 'text' }).pipe(
      catchError((err) => {
        console.error(err);
        window.alert("Profile modification failed!");
        throw err;
      })
    )
  }

  public changePassword(data: any){
    const headers = {'content-type': 'application/json'}
    const body = {
      "oldPassword": data.oldPassword,
      "newPassword": data.newPassword
    }
    console.log(data.oldPassword+" -- "+data.newPassword);
    return this.httpClient.post(environment.apiKey+"/user/changePassword",body,{ headers, responseType: 'text' }).pipe(
      catchError((err) => {
        console.error(err);
        window.alert("Password change failed!");
        throw err;
      })
    )
  }

}
