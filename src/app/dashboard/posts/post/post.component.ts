import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/common/service/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  details: any;
  blogData: any;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getBlog();
  }

  getBlog() {
    this.api.getBlog().subscribe((res) => {
      this.blogData = res;
      this.blogData.techType = "Java"
      this.blogData.forEach((ele:any)=>{
        switch (ele.techType) {
          case 'Java':
            ele['imgSrc'] = 'https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png';
            break;
          case 'Javascript':
            ele['imgSrc'] = 'https://storeassets.im-cdn.com/products/b32eea/k3RXeqISQHGv9ZBtApwG_javascript.png';
            break;
          case 'Python':
            ele['imgSrc'] = 'https://logowik.com/content/uploads/images/python.jpg';
            break;
          case 'Php':
            ele['imgSrc'] = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png';
            break;
          case 'C':
            ele['imgSrc'] = 'data:image/png;base64,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';
            break;
          case 'C++':
            ele['imgSrc'] = 'https://raw.githubusercontent.com/github/explore/180320cffc25f4ed1bbdfd33d4db3a66eeeeb358/topics/cpp/cpp.png';
            break;
          case 'SwiftUI':
            ele['imgSrc'] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDQEYInli3LE4xIfjTApSuxHeeijW-dTYuw&usqp=CAU';
            break;
          case 'Flutter':
            ele['imgSrc'] = 'https://storage.googleapis.com/cms-storage-bucket/70760bf1e88b184bb1bc.png';
            break;
          default: ele['imgSrc'] = 'data:image/png;base64,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';
        }
      })
    });

  }
}
