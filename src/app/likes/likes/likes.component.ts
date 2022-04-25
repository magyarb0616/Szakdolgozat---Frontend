import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetLiked } from 'src/app/model/pet-liked';
import { MatchService } from 'src/app/service/match.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  pets: PetLiked[] = [];
  constructor(
    private router: Router,
    private matchService: MatchService
    ) { }

  ngOnInit(): void {
    this.loadLikedPets();
   
  }

loadLikedPets(){
  this.matchService.getLikedPets().subscribe(response => {
    this.pets = response;
    console.log(this.pets[0].name);
  })
}


}
