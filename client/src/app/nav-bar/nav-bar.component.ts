import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faWorm } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faBacon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  user: String | null = '';
  faArrowRightFromBracket=faArrowRightFromBracket;
  faWorm=faWorm;
  faMap=faMap;
  faBacon=faBacon;

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

  logIn(){
    this.route.navigate(['/login']);
  }

}
