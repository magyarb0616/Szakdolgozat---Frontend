import { Component, OnInit } from '@angular/core';

import {Country} from "../../model/Country";
import {City} from "../../model/City";
import {CountryServiceService} from "../../service/country.service";
import {CityService} from "../../service/city.service";
import {PetService} from "../../service/pet.service";
import {Specie} from "../../model/specie";
import {Breed} from "../../model/breed";
import {Router} from "@angular/router";

@Component({
  selector: 'app-petregister',
  templateUrl: './petregister.component.html',
  styleUrls: ['./petregister.component.scss']
})
export class PetregisterComponent implements OnInit {
  countries: Country[] = [];
  cities: City[] = [];
  species: Specie[] = [];
  breeds: Breed[] = [];

  constructor(private countryService: CountryServiceService,
              private cityService: CityService,
              private petService: PetService,
              private router: Router) { }

  ngOnInit(): void {
    this.getCountries();
    this.getSpecies();
  }

  public petRegisterHandler(data: any){
    this.petService.registerPet(data).subscribe(response => {
      console.log(response);
    })
    this.router.navigate([`mypets`]);
  }

  public getCountries() {
    this.countryService.getCountries().subscribe(response => {
      this.countries = response;
    })
  }

  public getCities(event: any) {
    this.cityService.getCities(event.target.value).subscribe(response => {
        this.cities = response
      }
    )
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

}
