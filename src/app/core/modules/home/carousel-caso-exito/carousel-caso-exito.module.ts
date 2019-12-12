import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NguCarouselModule } from "@ngu/carousel";
import { CarouselCasoExitoComponent } from "./carousel-caso-exito.component";
import { TarjetaCasoExitoModule } from "../tarjeta-caso-exito/tarjeta-caso-exito.module";

@NgModule({
  declarations: [CarouselCasoExitoComponent],
  imports: [CommonModule, NguCarouselModule, TarjetaCasoExitoModule],
  exports: [CarouselCasoExitoComponent]
})
export class CarouselCasoExitoModule {}
