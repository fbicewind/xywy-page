import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  blog: {
    id?: number | null;
    title?: string | null;
    blogType?: string | null;
    blogTag?: string | null;
    blogTagId?: number | null;
    content?: string | null;
    createTime?: Date | null;
    modifyTime?: Date | null;
    readCount?: number | null;
  } = {};
  infos: {
    tags?: Array<{}> | null;
    recommendBlogs?: Array<{}> | null;
    readBlogs?: Array<{}> | null;
    lastBlogs?: Array<{}> | null;
  } = {};

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.blogService.getBlogById(parseInt(id)).subscribe(res => {
        console.log(res);
        this.blog = res.data;
      });
    });
    this.blogService.getRightInfo().subscribe(res => {
      this.infos = res.data;
    });
  }

}
