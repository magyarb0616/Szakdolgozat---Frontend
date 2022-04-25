import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("isLogged")==="false"){
      this.router.navigate(['login']);
    }

  }

  logOut(){
    localStorage.clear();
    localStorage.setItem("isLogged","false");
    this.router.navigate(['login']);  
  }



}
