import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor() {}

  ngOnInit() {
    this.myStyle = {
      width: '100%',
      height: '100%'
      // position: 'fixed',
      // 'z-index': -1,
      // top: 0,
      // left: 0,
      // right: 0,
      // bottom: 0
    };

    this.myParams = {
      particles: {
        number: {
          value: 120
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle'
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: '#ffffff',
          opacity: 0.7,
          width: 1
        },
        size: {
          value: 3
        },
        move: {
          speed: 2
        }
      }
    };
  }
}
