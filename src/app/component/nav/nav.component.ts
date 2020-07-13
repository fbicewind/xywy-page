import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  checkNav = 1;

  constructor(private router: Router, private location: PlatformLocation) { }

  ngOnInit() {
    let uri = '';
    for (const i in this, this.location) {
      if (i === 'location') {
        uri = this.location[i].href;
        break;
      }
    }
    if (uri.indexOf('life') > -1) {
      this.checkNav = 2;
    } else if (uri.indexOf('technique') > -1) {
      this.checkNav = 3;
    } else if (uri.indexOf('me') > -1) {
      this.checkNav = 4;
    } else {
      this.checkNav = 1;
    }
    this.addRouterChangeListen();
  }

  activeNav(i) {
    this.checkNav = i;
  }

  addRouterChangeListen() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.indexOf('life') > -1) {
          this.checkNav = 2;
        } else if (event.url.indexOf('technique') > -1) {
          this.checkNav = 3;
        } else if (event.url.indexOf('me') > -1) {
          this.checkNav = 4;
        } else {
          this.checkNav = 1;
        }
      }
    });
  }
}
