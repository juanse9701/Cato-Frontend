import { Component, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import 'hammerjs';
import 'pannellum/build/pannellum.js';
import { Gallery } from 'src/app/core/interface/page.interface';
declare var pannellum: any;

/**
 * Componente que renderiza una imagen 360 y le agrega controles a la misma para hacerla interactiva,
 * para estu hace uso de [Panellum]{@link https://pannellum.org/}.
 */
@Component({
  selector: 'app-image360',
  templateUrl: './image360.component.html',
  styleUrls: ['./image360.component.css']
})
export class Image360Component implements AfterViewInit {
  @ViewChild('img360', { static: true }) img: ElementRef;

  /** Objeto de tipo Gallery que contendra la imagen 360° */
  @Input() img360: Gallery;

  /** @ignore */
  constructor() {}

  ngAfterViewInit() {
    this.setVrImage();
  }

  /**
   * Función que es invocada una vez que el componente ha sido renderizado,
   * esta debe añadir la imagen 360 la cual es accedida gracias a la variable img360, para esto
   * hace uso de panellum quien se encarga de agregar los controles y darle el comportamiento 360.
   */
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
