import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWithCarousel1Component } from './section-with-carousel1.component';
import { CarouselWithItemModule } from '../../carousel-with-item/carousel-with-item.module';

@NgModule({
  declarations: [SectionWithCarousel1Component],
  imports: [CommonModule, CarouselWithItemModule],
  exports: [SectionWithCarousel1Component]
})
export class SectionWithCarousel1Module {}
