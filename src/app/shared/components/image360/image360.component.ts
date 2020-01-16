import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import 'hammerjs';
import 'pannellum/build/pannellum.js';
declare var pannellum: any;

@Component({
  selector: 'app-image360',
  templateUrl: './image360.component.html',
  styleUrls: ['./image360.component.css']
})
export class Image360Component implements AfterViewInit {
  @ViewChild('img360', { static: true }) img: ElementRef;
  @Input() data: any;

  constructor() {}

  ngAfterViewInit() {
    this.setVrImage();
  }

  setVrImage(): void {
    pannellum
      .viewer(this.img.nativeElement, {
        type: 'equirectangular',
        panorama: this.data.src,
        autoLoad: true,
        autoRotate: -2
      })
      .on('load', () => {
        window.dispatchEvent(new Event('resize'));
      });
  }
}
