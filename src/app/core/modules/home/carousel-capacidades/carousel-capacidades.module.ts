import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselCapacidadesComponent } from "./carousel-capacidades.component";
import { TarjetaCapacidadModule } from "../tarjeta-capacidad/tarjeta-capacidad.module";
import { NguCarouselModule } from "@ngu/carousel";

@NgModule({
  declarations: [CarouselCapacidadesComponent],
  imports: [CommonModule, TarjetaCapacidadModule, NguCarouselModule],
  exports: [CarouselCapacidadesComponent]
})
export class CarouselCapacidadesModule {}
