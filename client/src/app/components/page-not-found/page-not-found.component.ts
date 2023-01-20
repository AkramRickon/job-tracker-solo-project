import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent  implements OnInit{

  faArrowLeftLong=faArrowLeftLong;

  constructor(private Router:Router){}
  ngOnInit(): void {
    
  }
  
  goHome(){
    this.Router.navigate(['/home'])

  }
}
