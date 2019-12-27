import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselWithTileComponent } from './carousel-with-tile.component';
import { NguCarouselModule } from '@ngu/carousel';
import { CardCarouselTileModule } from './card-carousel-tile/card-carousel-tile.module';

@NgModule({
  declarations: [CarouselWithTileComponent],
  imports: [CommonModule, NguCarouselModule, CardCarouselTileModule],
  exports: [CarouselWithTileComponent]
})
export class CarouselWithTileModule {}
