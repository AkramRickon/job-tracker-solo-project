import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  user: String | null = '';
  constructor(private authService: AuthService, private route: Router) { };
  ngOnInit(): void {
    this.authCheck();
    this.route.events.subscribe(() => {
      this.authCheck();
    })
  }

  authCheck () {
    this.user = this.authService.getUser();
  }


  logOut() {
    localStorage.clear();
  }

}
