import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AddPostGuard implements CanActivate {
  isLoggedIn:boolean = false;
  constructor(private api: ApiService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.api.isLoggedIn.subscribe((res:any)=>{
      this.isLoggedIn = res;
    })
      if (this.isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['sign-in']);
        return false;
      }
  }
  
}
