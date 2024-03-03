import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { APIEndPoint } from 'src/app/_miscellaneous/ApiEndPoint';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  login(){
    return this.http.get(APIEndPoint.ENDPOINT_URL + 'users');
  }

  signUp(payload:any){
    return this.http.post(APIEndPoint.ENDPOINT_URL + 'users', payload);
  }

  getBlog(){
    return this.http.get(APIEndPoint.ENDPOINT_URL + 'blogs');
  }

  postBlog(payload:any){
    return this.http.post(APIEndPoint.ENDPOINT_URL + 'blogs',payload);
  }

  getBlogById(id:any){
    return this.http.get(APIEndPoint.ENDPOINT_URL + 'blogs/'+ id);
  }

  saveComment(payload){
    return this.http.post(APIEndPoint.ENDPOINT_URL + 'comment/', payload);
  }
}
