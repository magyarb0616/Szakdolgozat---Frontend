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



  getSpecies():Observable<any> {
    return this.httpClient.get(environment.apiKey + "/species/list", this.httpOptions).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
  }

  getBreedsBySpecies(specieId : number):Observable<any>{
    return this.httpClient.get(environment.apiKey+"/species/breeds?id="+specieId).pipe(
      catchError(err => {
        console.log(err);
        throw err;
      })
    )
  }

  registerPet(data: any){
    const headers = {'content-type': 'application/json'}
    var jsonData = {
      "name"    : data.name,
      "age"     : data.age,
      "sex"     : data.sexOptions,
      "size"    : data.sizeOptions,
      "hair"    : data.hairOptions,
      "movement": data.movementOptions,
      "breedId" : data.breed,
      "cityId"  : data.city
    }
    const body = JSON.stringify(jsonData);
    console.log(body);

    return this.httpClient.post(environment.apiKey+"/pet",body,{headers}).pipe(
      catchError(err => {
        console.error(err);
        window.alert("Pet registration failed");
        throw err;
      })
    )
  }


  getPetImages(id: string){
    return this.httpClient.get(environment.apiKey+"/pet/image/list?id="+id,this.httpOptions)
  }


}
