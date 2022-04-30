import { Component, OnInit } from '@angular/core';
import {PetLiked} from "../../model/pet-liked";
import {Pet} from "../../model/pet";
import {Router} from "@angular/router";
import {PetService} from "../../service/pet.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-mypets',
  templateUrl: './mypets.component.html',
  styleUrls: ['./mypets.component.scss']
})
export class MypetsComponent implements OnInit {
  pets: Pet[] = [];
  constructor(
    private router: Router,
    private petService: PetService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.loadMyPets();
  }


  loadMyPets(){
    this.petService.getMypets().subscribe(response =>{
      this.pets = response
    })
  }

  navToPetPic(id: string){
    localStorage.setItem("sel-pet","");
    localStorage.setItem("sel-pet",id);
    console.log("saved id: "+id);
    console.log("here?: "+localStorage.getItem("sel-pet"));
    this.router.navigate(['pitcturemanagement']);
  }


  allPic(id: string){
    localStorage.setItem("sel-pet","");
    localStorage.setItem("sel-pet",id);
    console.log("saved id: "+id);
    console.log("here?: "+localStorage.getItem("sel-pet"));
    this.router.navigate(['carousel']);
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  async deletePet(id: string){
    this.httpClient.post(environment.apiKey+"/pet/delete?id="+id,this.httpOptions).subscribe(response => {
      console.log(response);
    })
    await this.delay(500);
    this.loadMyPets();
  }


  public delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
