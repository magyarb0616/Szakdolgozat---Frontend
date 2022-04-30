import { Component, OnInit } from '@angular/core';
import {PetService} from "../service/pet.service";
import {Image} from "../model/image";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: Image[] = [];
  constructor(private petService: PetService ) { }

  ngOnInit(): void {
    this.getAllPictures(JSON.parse(localStorage.getItem('sel-pet') || '{}'));
  }

  getAllPictures(id: string){
    this.petService.getPetImages(id).subscribe(response => {
      // @ts-ignore
      this.images = response;
    })
  }

}
