import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselWithTileComponent } from './carousel-with-tile.component';
import { NguCarouselModule } from '@ngu/carousel';
import { TarjetaCasoExitoModule } from 'src/app/core/modules/home/tarjeta-caso-exito/tarjeta-caso-exito.module';

@NgModule({
  declarations: [CarouselWithTileComponent],
  imports: [CommonModule, NguCarouselModule, TarjetaCasoExitoModule],
  exports: [CarouselWithTileComponent]
})
export class CarouselWithTileModule {}
