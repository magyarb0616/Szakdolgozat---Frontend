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
  })
}

async deleteLike(id: string){
this.matchService.deleteMatch(id).subscribe(response => {
  //console.log(response);
})
await this.delay(500)
this.loadLikedPets();
}

public delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}


  allPic(id: string){
    localStorage.setItem("sel-pet","");
    localStorage.setItem("sel-pet",id);
    console.log("saved id: "+id);
    console.log("here?: "+localStorage.getItem("sel-pet"));
    this.router.navigate(['carousel']);
  }

}
