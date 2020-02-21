import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  musicSmallShow = false;

  constructor() { }

  ngOnInit() {
  }

  musicEnter(){
    console.log('musicEnter');
    this.musicSmallShow = true;
  }

  musicLeave(){
    console.log('mouseleave');
    this.musicSmallShow = false;
  }
}
