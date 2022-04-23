import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../model/loginResponse';
@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private httpClient: HttpClient) { }

  public signUp(data: any){
    const headers = {'content-type': 'application/json'}
    var jsonData = {
      "username": data.username,
      "password":data.password,
      "email": data.email,
      "surname": data.surname,
      "firstname": data.firstname,
      "phone": data.phone,
      "cityId": data.city,
      "role": ["user"]
    }
    const body = JSON.stringify(jsonData);

   return this.httpClient.post(environment.apiKey+"/auth/signup",body,{ headers, responseType: 'text' }).pipe (
     catchError((err) => {
       console.error(err);
       window.alert("Registration failed");
       throw err;
     })
   )
  }

  public login(data: any):Observable<any>{
    const headers = {'content-type': 'application/json'}
    var jsonData = {
      "username": data.username,
      "password": data.password
    }
    const body = JSON.stringify(jsonData);
    console.log(jsonData);
    return this.httpClient.post(environment.apiKey+"/auth/login",body, { headers }).pipe(
      catchError((err) => {
        window.alert("Login failed");
        throw err
      })
    )
  }


}
