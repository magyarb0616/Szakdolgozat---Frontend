import { Component, OnInit } from '@angular/core';
import {Specie} from "../../model/specie";
import {Breed} from "../../model/breed";
import {PetService} from "../../service/pet.service";
import {Router} from "@angular/router";
import {Pet} from "../../model/pet";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {MatchService} from "../../service/match.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  species: Specie[] = [];
  breeds: Breed[] = [];
  pets: Pet[] = [];
  constructor(private petService: PetService,
              private router: Router,
              private httpClient: HttpClient,
              private matchService: MatchService) { }

  ngOnInit(): void {
    this.getSpecies();
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  searchHandler(data: any){
    var jsonData = {
      "breedId" : data.breed,
      "sex"     : data.gender,
      "size"    : data.size,
      "hair"    : data.hair,
      "movement": data.movement
    }

    const body = JSON.stringify(jsonData);
    console.log(body);

    this.httpClient.post(environment.apiKey+"/search",body,this.httpOptions).subscribe(response =>{
      // @ts-ignore
      this.pets = response;
    })

  }

  public getSpecies() {
    this.petService.getSpecies().subscribe(response => {
      this.species = response;
    })
  }

  public getBreeds(event: any) {
    this.petService.getBreedsBySpecies(event.target.value).subscribe(response => {
      this.breeds = response;
    })
  }

  public async likePet(id : string){
    (await this.matchService.createMatch(id)).subscribe(response => {
      console.log(response);
    })
  }

  allPic(id: string){
    localStorage.setItem("sel-pet","");
    localStorage.setItem("sel-pet",id);
    console.log("saved id: "+id);
    console.log("here?: "+localStorage.getItem("sel-pet"));
    this.router.navigate(['carousel']);
  }



}
