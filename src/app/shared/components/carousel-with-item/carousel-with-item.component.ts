import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import 'hammerjs';
import { Post } from 'src/app/core/interface/page.interface';
/**
 * Componente encargado de renderizar un carousel de post, los cuales
 * son representados en forma de tarjetas que llegan en una lista de tipo {@link Post}
 */
@Component({
  selector: 'app-carousel-with-item',
  templateUrl: './carousel-with-item.component.html',
  styleUrls: ['./carousel-with-item.component.css']
})
export class CarouselWithItemComponent implements OnInit {
  /** variable de tipo Input para pruebas */
  @Input() data: any[];

  @Input() posts: Post[];

  /**
   * Variable de tipo  [NguCarouselConfig]{@link https://www.npmjs.com/package/@ngu/carousel} la cual permite
   * agregar configuraciones al carousel.
   */
  carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
    speed: 0,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 4500 },
    animation: 'lazy'
  };

  /** @ignore */
  constructor() {}

  /** @ignore */
  ngOnInit() {}
}
