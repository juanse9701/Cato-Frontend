import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWithCarousel2Component } from './section-with-carousel2.component';
import { CarouselWithTileModule } from '../carousel-with-tile/carousel-with-tile.module';

@NgModule({
  declarations: [SectionWithCarousel2Component],
  imports: [CommonModule, CarouselWithTileModule],
  exports: [SectionWithCarousel2Component]
})
export class SectionWithCarousel2Module {}
