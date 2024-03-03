import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/service/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  errorMessage:any = {
    type:'', message: ''

  };
  passwordPattern: any =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*^?&\.])[A-Za-z\d@#$!%*^?&\.]{8,15}$/;
  emailPattern: any =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneNoPattern:any = /^[0-9]{10}$/
  constructor(private fb: FormBuilder, private api:ApiService, private router:Router) {}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName:[null,[Validators.minLength(4)]],
      lastName:[null,[Validators.minLength(4)]],
      phoneNo: [null, Validators.pattern(this.phoneNoPattern)],
      email: [null,Validators.pattern(this.emailPattern)],
      password:[null,Validators.pattern(this.passwordPattern)]
  
    })
  }

  signUp(){
    if(this.signupForm?.status == 'VALID'){
      this.api.signUp(this.signupForm?.value).subscribe((res:any)=> {
        this.errorMessage.type = 'success'
        this.errorMessage.message = "User Register Suceessfully"
        setTimeout(()=>{
          this.signupForm.reset({});
          this.router.navigate(['/sign-in']);
          this.errorMessage = []
        },700)
      }, (error:any)=> {
        this.errorMessage.type = 'danger'
        this.errorMessage.message = "Internal Server Error";
      })
    }else{
      this.errorMessage.type = 'danger'
      this.errorMessage.message = 'Please Enter Valid Details';
    }
  }
}
