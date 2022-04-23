import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../service/country-service.service';
import { CityService } from '../service/city.service';
import { Country } from '../model/Country';
import { City } from '../model/City';
import { LoginResponse } from '../model/loginResponse';
import { LoginService } from '../service/login.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  countries: Country[] = [];
  cities: City[] = [];
  logindata!: LoginResponse;
  loading: boolean = false;
  errorMessage: string | undefined;


  constructor(
    private countryService: CountryServiceService,
    private cityService: CityService,
    private loginService: LoginService,
    private httpClient: HttpClient,
    private router: Router) {

  }

  ngOnInit(): void {
    if(localStorage.getItem("isLogged")==="true"){
      this.router.navigate(['home']);
    }
    this.getCountries();

  }

  public signUpHandler(data :any){
    this.loginService.signUp(data).subscribe(result =>{
      console.warn(result);
      window.alert(result);
    })
  }

  public loginHandler(data :any){
    localStorage.setItem("isLogged", "false");
    this.loginService.login(data).subscribe(result => {
      this.logindata = result;
      console.log("Login successfull.");
      localStorage.setItem("token",this.logindata.token);
      localStorage.setItem("type",this.logindata.type);
      localStorage.setItem("id",this.logindata.id.toString());
      localStorage.setItem("username",this.logindata.username);
      localStorage.setItem("email",this.logindata.email);
      //let isAdmin = this.logindata.roles.includes("ROLE_ADMIN");
      if(this.logindata.roles.includes("ROLE_ADMIN")){
        localStorage.setItem("admin","true")
      } else {
        localStorage.setItem("admin","false")
      }
      localStorage.setItem("isLogged", "true");
      //console.log(localStorage.getItem("admin"));
      this.router.navigate(['home']);

    })
  }

  signupPanel() {
    console.log("signup panel");
    const container = document.getElementById('container');
    container?.classList.add("right-panel-active");
  }

  LoginPanel() {
    console.log("login panel");
    const container = document.getElementById('container');
    container?.classList.remove("right-panel-active");
  }
  public getCountries() {
    this.countryService.getCountries().subscribe(response => {
      this.countries = response;
      //this.fillCities(this.countries[0].id);
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


}
