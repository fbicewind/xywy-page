import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  checkNav = 1;

  constructor(private route: ActivatedRoute, private location: PlatformLocation) { }

  ngOnInit() {
    let uri = '';
    for (const i in this, this.location) {
      if (i === 'location') {
        uri = this.location[i].href;
        break;
      }
    }
    if (uri.indexOf('blog') > -1) {
      this.checkNav = 2;
    } else if (uri.indexOf('album') > -1) {
      this.checkNav = 3;
    } else if (uri.indexOf('aboutMe') > -1) {
      this.checkNav = 4;
    } else {
      this.checkNav = 1;
    }
  }

  activeNav(i) {
    this.checkNav = i;
  }

}
