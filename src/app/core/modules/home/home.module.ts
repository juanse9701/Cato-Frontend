import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { DevelopmentCardComponent } from "../../../shared/components/development-card/development-card.component";
import { RouterModule, Routes } from "@angular/router";
import { TarjetaLineaTecnologicaComponent } from "./tarjeta-linea-tecnologica/tarjeta-linea-tecnologica.component";
import { ClientCardModule } from "../../../shared/components/client-card/client-card.module";
import { TarjetaCapacidadModule } from "./tarjeta-capacidad/tarjeta-capacidad.module";
import { CarouselCasoExitoModule } from "./carousel-caso-exito/carousel-caso-exito.module";
import { CarouselCapacidadesModule } from "./carousel-capacidades/carousel-capacidades.module";
import { SectorModule } from "src/app/shared/components/sector/sector.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    DevelopmentCardComponent,
    TarjetaLineaTecnologicaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ClientCardModule,
    TarjetaCapacidadModule,
    CarouselCasoExitoModule,
    CarouselCapacidadesModule,
    SectorModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
