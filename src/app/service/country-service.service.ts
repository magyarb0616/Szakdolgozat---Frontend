import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Country } from '../model/Country';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {


  constructor(private httpClient: HttpClient) { }

  getCountries(): Observable<any>{
    return this.httpClient.get(environment.apiKey+"/country/list")
  }


}
