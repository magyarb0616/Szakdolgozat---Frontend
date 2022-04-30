import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LikesComponent } from './likes/likes/likes.component';
import { LoginComponent } from './login/login.component';
import { MypetsComponent } from './mypets/mypets/mypets.component';
import { PetregisterComponent } from './petregister/petregister/petregister.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SearchComponent } from './search/search/search.component';
import {PictureManagementComponent} from "./picture-management/picture-management.component";
import {CarouselComponent} from "./carousel/carousel.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'home', component: HomeComponent},
  { path:"likes", component: LikesComponent },
  { path:"profile", component: ProfileComponent },
  { path:"mypets", component: MypetsComponent },
  { path:"search", component: SearchComponent },
  { path:"petregister", component: PetregisterComponent },
  { path: "pitcturemanagement", component: PictureManagementComponent},
  { path: "carousel", component: CarouselComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {





}
