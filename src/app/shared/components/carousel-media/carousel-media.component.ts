import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
// import 'hammerjs';

@Component({
  selector: 'app-carousel-media',
  templateUrl: './carousel-media.component.html',
  styleUrls: ['./carousel-media.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselMediaComponent implements AfterViewInit {
  @Input() data: any[];

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
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
