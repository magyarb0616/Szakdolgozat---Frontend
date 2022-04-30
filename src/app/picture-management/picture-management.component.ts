import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Image} from "../model/image";
import {PetService} from "../service/pet.service";
import {async} from "rxjs";

@Component({
  selector: 'app-picture-management',
  templateUrl: './picture-management.component.html',
  styleUrls: ['./picture-management.component.scss']
})
export class PictureManagementComponent implements OnInit {
selectedFile = null;
images: Image[] = [];
  constructor(private httpClient: HttpClient, private petService: PetService) { }

  ngOnInit(): void {
    this.getAllPictures(JSON.parse(localStorage.getItem('sel-pet') || '{}'));
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }


   async onUpload(){
    const fd = new FormData();
    fd.append("id",JSON.parse(localStorage.getItem('sel-pet') || '{}'));
    // @ts-ignore
    fd.append('file',this.selectedFile, this.selectedFile.name);
    this.httpClient.post(environment.apiKey+"/pet/image/upload",fd).subscribe(
      response => {
        console.log(response);

      }
    )
     await this.delay(750);
     this.getAllPictures(JSON.parse(localStorage.getItem('sel-pet') || '{}'));
  }

  getAllPictures(id: string){
    this.petService.getPetImages(id).subscribe(response => {
      // @ts-ignore
      this.images = response;
    })
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  async deleteImage(id: string){
    this.httpClient.post(environment.apiKey+"/pet/image/delete?id="+id,this.httpOptions).subscribe(response => {
      console.log(response);
    })

    await this.delay(750);
    this.getAllPictures(JSON.parse(localStorage.getItem('sel-pet') || '{}'));
  }



  public delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
