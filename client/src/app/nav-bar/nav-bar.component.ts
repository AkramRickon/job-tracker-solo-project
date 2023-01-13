import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  
  constructor(private authService : AuthService){};
  ngOnInit(): void {
    
  }

  
  logOut(){
    localStorage.clear();
   
  }

}
