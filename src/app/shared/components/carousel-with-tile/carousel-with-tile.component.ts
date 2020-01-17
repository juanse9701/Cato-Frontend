import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import 'hammerjs';

@Component({
  selector: 'app-carousel-with-tile',
  templateUrl: './carousel-with-tile.component.html',
  styleUrls: ['./carousel-with-tile.component.css']
})
export class CarouselWithTileComponent implements OnInit {
  @Input() data: any[];

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
  constructor() {}

  ngOnInit() {}
}
