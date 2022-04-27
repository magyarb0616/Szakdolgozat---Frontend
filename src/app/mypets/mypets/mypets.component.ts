import { Component, OnInit } from '@angular/core';
import {PetLiked} from "../../model/pet-liked";
import {Pet} from "../../model/pet";
import {Router} from "@angular/router";
import {PetService} from "../../service/pet.service";

@Component({
  selector: 'app-mypets',
  templateUrl: './mypets.component.html',
  styleUrls: ['./mypets.component.scss']
})
export class MypetsComponent implements OnInit {
  pets: Pet[] = [];
  constructor(
    private router: Router,
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.loadMyPets();
  }


  loadMyPets(){
    this.petService.getMypets().subscribe(response =>{
      this.pets = response
    })
  }




}
