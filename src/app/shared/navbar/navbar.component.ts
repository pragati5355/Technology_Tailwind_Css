import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/common/service/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isLoggedIn:any;
  constructor(private api:ApiService){
  }

  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser(){
    this.api.isLoggedIn.subscribe((res:any)=> {
      this.isLoggedIn = res
    })
  }
}
