import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Gallery } from 'src/app/core/interface/page.interface';
// import 'hammerjs';

/**
 * Componente que renderiza un carousel, la caracteristica principal es que puede renderizar imagenes, imagenes 360 y videos de youtube.
 */
@Component({
  selector: 'app-carousel-media',
  templateUrl: './carousel-media.component.html',
  styleUrls: ['./carousel-media.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselMediaComponent implements AfterViewInit {
  @Input() gallery: Gallery[];

  /**
   * Variable de tipo NguCarouselConfig la cual permite agregar configuraciones al carousel.
   */
  carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: false,
    loop: true,
    interval: { timing: 4500 },
    animation: 'lazy'
  };

  /** @ignore */
  constructor(private cdr: ChangeDetectorRef) {}

  /** @ignore */
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
