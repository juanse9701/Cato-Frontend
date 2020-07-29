import { Component, OnInit, Input, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import 'hammerjs';
import { Post } from 'src/app/core/interface/page.interface';

/**
 * Carousel with Tile
 *
 * Componente encargado de renderizar un carousel de post, los cuales
 * son representados en forma de tarjetas que llegan en una lista de tipo {@link Post},
 * estas tarjetas no tiene algun estilo en particular, de hecho no contiene sombras y/o contornos.
 */
@Component({
  selector: 'app-carousel-with-tile',
  templateUrl: './carousel-with-tile.component.html',
  styleUrls: ['./carousel-with-tile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselWithTileComponent implements OnInit, AfterViewInit {
  @Input() posts: Post[];

  /**
   * Variable de tipo NguCarouselConfig la cual permite agregar configuraciones al carousel.
   */
  carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 4500 },
    animation: 'lazy'
  };

  constructor(private cdr: ChangeDetectorRef) {}

  /** @ignore */
  ngOnInit() {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
