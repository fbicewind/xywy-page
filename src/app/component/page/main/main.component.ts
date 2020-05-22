import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  infos: {
    tags?: Array<{}> | null;
    webInfo?: {
      webName?: string | null;
      version?: string | null;
      buildDate?: string | null;
    };
    personalCard?: Array<{}> | null;
    friendlyLinks?: Array<{}> | null;
  } = {};
  blogs = [];
  
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getIndexInfo().subscribe(res => {
      console.log(res);
      this.infos = res.data;
    });
    this.blogService.getRecommendBlogs().subscribe(res => {
      console.log(res);
      this.blogs = res.data;
    });
  }

}
