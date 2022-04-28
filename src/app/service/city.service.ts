import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { City } from '../model/City';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }

  getCities(countryId : number):Observable<any>{
    console.log(countryId);
    return this.httpClient.get(environment.apiKey+"/country/cities?id="+countryId).pipe(
      catchError(err => {
        console.log(err);
        throw err;
      })
    )
  }

}
