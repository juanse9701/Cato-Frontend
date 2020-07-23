import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import 'hammerjs';
import 'pannellum/build/pannellum.js';
import { Gallery } from 'src/app/core/interface/page.interface';
declare var pannellum: any;

@Component({
  selector: 'app-image360',
  templateUrl: './image360.component.html',
  styleUrls: ['./image360.component.css']
})
export class Image360Component implements AfterViewInit {
  @ViewChild('img360', { static: true }) img: ElementRef;

  @Input() img360: Gallery;

  constructor() {}

  ngAfterViewInit() {
    this.setVrImage();
  }

  setVrImage(): void {
    pannellum
      .viewer(this.img.nativeElement, {
        type: 'equirectangular',
        panorama: this.img360.image,
        autoLoad: true,
        autoRotate: -2
      })
      .on('load', () => {
        window.dispatchEvent(new Event('resize'));
      });
  }
}
