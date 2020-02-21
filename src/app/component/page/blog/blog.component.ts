import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs=[{
    thumbImg: "https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2019/12/touann-gatouillat-vergos-CwnFmGfI-p4-unsplash.jpg&h=123&w=200&q=90&zc=1&ct=1",
    title: "Test it",
    thumbContent: "this is a simple test for version 0.0.1",
    type: "TEST",
    createTime: "2020-01-10 10:15",
    readCount: 100
  },{
    thumbImg: "https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2019/12/touann-gatouillat-vergos-CwnFmGfI-p4-unsplash.jpg&h=123&w=200&q=90&zc=1&ct=1",
    title: "Test it2",
    thumbContent: "this is a simple test2 for version 0.0.1",
    type: "TEST",
    createTime: "2020-01-10 10:16",
    readCount: 101
  },{
    thumbImg: "https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2019/12/touann-gatouillat-vergos-CwnFmGfI-p4-unsplash.jpg&h=123&w=200&q=90&zc=1&ct=1",
    title: "Test it3",
    thumbContent: "this is a simple test2 for version 0.0.1",
    type: "TEST",
    createTime: "2020-01-10 10:16",
    readCount: 101
  },{
    thumbImg: "https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2019/12/touann-gatouillat-vergos-CwnFmGfI-p4-unsplash.jpg&h=123&w=200&q=90&zc=1&ct=1",
    title: "Test it4",
    thumbContent: "this is a simple test2 for version 0.0.1",
    type: "TEST",
    createTime: "2020-01-10 10:16",
    readCount: 101
  },{
    thumbImg: "https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2019/12/touann-gatouillat-vergos-CwnFmGfI-p4-unsplash.jpg&h=123&w=200&q=90&zc=1&ct=1",
    title: "Test it4",
    thumbContent: "this is a simple test2 for version 0.0.1",
    type: "TEST",
    createTime: "2020-01-10 10:16",
    readCount: 101
  },{
    thumbImg: "https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2019/12/touann-gatouillat-vergos-CwnFmGfI-p4-unsplash.jpg&h=123&w=200&q=90&zc=1&ct=1",
    title: "Test it4",
    thumbContent: "this is a simple test2 for version 0.0.1",
    type: "TEST",
    createTime: "2020-01-10 10:16",
    readCount: 101
  },{
    thumbImg: "https://cuiqingcai.com/wp-content/themes/Yusi/timthumb.php?src=https://qiniu.cuiqingcai.com/wp-content/uploads/2019/12/touann-gatouillat-vergos-CwnFmGfI-p4-unsplash.jpg&h=123&w=200&q=90&zc=1&ct=1",
    title: "Test it4",
    thumbContent: "this is a simple test2 for version 0.0.1",
    type: "TEST",
    createTime: "2020-01-10 10:16",
    readCount: 101
  }]
  constructor() { }

  ngOnInit() {
  }

}
