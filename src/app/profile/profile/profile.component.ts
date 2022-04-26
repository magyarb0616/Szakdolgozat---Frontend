import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder } from "@angular/forms";
import { CountryServiceService } from 'src/app/service/country.service';
import { CityService } from 'src/app/service/city.service';
import { Country } from 'src/app/model/Country';
import { City } from 'src/app/model/City';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: User;
  countries: Country[] = [];
  cities: City[] = [];

  

  constructor( 
    private userService: UserService,
     private formBuilder: FormBuilder,
     private countryService: CountryServiceService,
     private cityService: CityService,
     ) { }

  ngOnInit(): void {
    this.getMyUser(); 
    this.getCountries();
    this.getCities(this.user.countryId);

  }

  public profileUpdateHandler(data :any){
    this.userService.updateUser(data).subscribe(result => {
      console.log(result);
      window.alert(result);
    })
  }

  public PasswordChangeHandler(data: any){
    if( data.newPassword === data.newPasswordConfirm){
      this.userService.changePassword(data).subscribe(result => {
        console.log(result);
        window.alert(result);
      })
    } else{
      window.alert("The two password doesn't match!");
    }
  }


  public getMyUser(){
    this.userService.getUser().subscribe(response => {
      this.user = response;
      console.log(this.user);

    })
  }

  public getCountries() {
    this.countryService.getCountries().subscribe(response => {
      this.countries = response;
      this.fillCities(this.countries[0].id);
    })
  }

  public getCities(event: any) {
    this.cityService.getCities(event.target.value).subscribe(
      response => {
        this.cities = response
      }
    )
  }

  fillCities(id:number) {
    this.cityService.getCities(id).subscribe( response => {
     this.cities=response;
     }
  )
}
 
passwordPanel() {
  const container = document.getElementById('container');
  container?.classList.add("right-panel-active");
}

profilePanel() {
  const container = document.getElementById('container');
  container?.classList.remove("right-panel-active");
}

}
