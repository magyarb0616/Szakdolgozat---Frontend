import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailviewComponent } from './detailview/detailview/detailview.component';
import { HomeComponent } from './home/home.component';
import { LikesComponent } from './likes/likes/likes.component';
import { LoginComponent } from './login/login.component';
import { MypetsComponent } from './mypets/mypets/mypets.component';
import { PetregisterComponent } from './petregister/petregister/petregister.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { SearchComponent } from './search/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },  
  { path: 'login', component: LoginComponent },
  { path:'home', component: HomeComponent},
  { path:"likes", component: LikesComponent },
  { path:"profile", component: ProfileComponent },
  { path:"mypets", component: MypetsComponent },
  { path:"search", component: SearchComponent },
  { path:"detail", component: DetailviewComponent },
  { path:"petregister", component: PetregisterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 





}
