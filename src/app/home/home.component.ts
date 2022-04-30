import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../model/pet';
import { MatchService } from '../service/match.service';
import { PetService } from '../service/pet.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pets: Pet[] = [];

  constructor(
    private router: Router,
    private petService: PetService,
    private matchService: MatchService,
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    this.loadRandom();
  }


  loadRandom(){
    this.petService.getRandomPets().subscribe(response => {
      this.pets = response;
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
