import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselMediaComponent } from './carousel-media.component';
import { NguCarouselModule } from '@ngu/carousel';
import { YoutubeVideoModule } from '../youtube-video/youtube-video.module';
import { Image360Module } from '../image360/image360.module';

@NgModule({
  declarations: [CarouselMediaComponent],
  imports: [CommonModule, NguCarouselModule, YoutubeVideoModule, Image360Module],
  exports: [CarouselMediaComponent]
})
export class CarouselMediaModule {}
