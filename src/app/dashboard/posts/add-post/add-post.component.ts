import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/common/service/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  addPostForm!: FormGroup;
  technologies = ['Java','Python','Php','C','C++','Javascript','SwiftUI','Flutter','Other']
  errorMessage:any = {
    type:'', message: ''

  };
  constructor(private _fb:FormBuilder, private api:ApiService, private router: Router){}
  ngOnInit(): void {
    this.addPostForm = this._fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description : ['',Validators.required],
      publish_date:[new Date()],
      techType:['',[Validators.required]]
    })
  }

  addPost(){
    if(this.addPostForm.status == 'VALID'){
      this.api.postBlog(this.addPostForm.value).subscribe((res)=>{
        this.errorMessage.message = "Post Added Successfully"
        this.errorMessage.type = 'success'
         setTimeout(()=>{
          this.errorMessage = []
          localStorage.setItem("post",JSON.stringify(this.addPostForm.value));
          this.router.navigate(['/posts']);
        },700)
      } )
    }else{
      this.errorMessage.type = 'danger'
      this.errorMessage.message = "Please Enter Valid Details";
    }
  }

}