import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  type = null;
  tagId: number = 0;
  pageData = {
    pageNum: 1,
    pageSize: 2,
    total: 0,
    blogs: []
  };
  infos: {
    tags?: Array<{}> | null;
    recommendBlogs?: Array<{}> | null;
    readBlogs?: Array<{}> | null;
    lastBlogs?: Array<{}> | null;
  } = {};
  blogs = [];

  constructor(private route: ActivatedRoute,
    private blogService: BlogService) { }

  ngOnInit() {
    this.route.parent.url.subscribe(url => this.type = url[0].path);
    this.blogService.getRightInfo().subscribe(res => {
      console.log(res);
      this.infos = res.data;
    });
    this.route.queryParams.subscribe((params) => {
      if (typeof params.tagId === 'undefined')
        this.tagId = 0;
      else
        this.tagId = this.fmtTagId(params.tagId);
      this.loadPageData(this.pageData.pageNum, this.pageData.pageSize);
    });
  }

  fmtTagId(tagId): number {
    try {
      return parseInt(tagId);
    } catch (error) {
      return 0;
    }
  }

  loadPageData(pageNum: number, pageSize: number): void {
    this.blogService.getBlogsByType(this.type, this.tagId, pageNum, pageSize).subscribe(res => {
      console.log(res);
      this.pageData.pageNum = res.data.number + 1;
      this.pageData.pageSize = res.data.size;
      this.pageData.total = res.data.totalElements;
      this.pageData.blogs = res.data.content;
    });
  }

  changePageSize(pageSize): void {
    this.loadPageData(this.pageData.pageNum, pageSize);
  }

  changePageIndex(pageNum): void {
    this.loadPageData(pageNum, this.pageData.pageSize);
  }

}
