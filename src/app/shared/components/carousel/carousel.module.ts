import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent} from './carousel.component';
import {NguCarouselModule} from '@ngu/carousel';
import {TarjetaCasoExitoModule} from '../../../core/modules/home/tarjeta-caso-exito/tarjeta-caso-exito.module';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    NguCarouselModule,
    TarjetaCasoExitoModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
