import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselWithItemComponent } from './carousel-with-item.component';
import { NguCarouselModule } from '@ngu/carousel';
import { CardCarouselItemModule } from '../card-carousel-item/card-carousel-item.module';

@NgModule({
  declarations: [CarouselWithItemComponent],
  imports: [CommonModule, NguCarouselModule, CardCarouselItemModule],
  exports: [CarouselWithItemComponent]
})
export class CarouselWithItemModule {}
