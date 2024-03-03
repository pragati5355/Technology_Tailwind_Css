import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/service/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isLoggedIn:boolean = false
  constructor(private router: Router,private api:ApiService){

  }
  ngOnInit(): void {
    this.getLoggedInUser();
  }

  getLoggedInUser(){
    this.api.isLoggedIn.subscribe((res:any)=> {
      this.isLoggedIn = res
    })
  }
  navigate(path:any){
  this.router.navigate([path])    
  }
}
