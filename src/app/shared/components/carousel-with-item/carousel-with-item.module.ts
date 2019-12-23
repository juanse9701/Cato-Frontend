import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselWithItemComponent } from './carousel-with-item.component';
import { NguCarouselModule } from '@ngu/carousel';
import { TarjetaCapacidadModule } from 'src/app/core/modules/home/tarjeta-capacidad/tarjeta-capacidad.module';

@NgModule({
  declarations: [CarouselWithItemComponent],
  imports: [CommonModule, NguCarouselModule, TarjetaCapacidadModule],
  exports: [CarouselWithItemComponent]
})
export class CarouselWithItemModule {}
