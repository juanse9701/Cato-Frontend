import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientCardModule } from '../../../shared/components/client-card/client-card.module';
import { TarjetaCapacidadModule } from './tarjeta-capacidad/tarjeta-capacidad.module';
import { CarouselCasoExitoModule } from './carousel-caso-exito/carousel-caso-exito.module';
import { CarouselCapacidadesModule } from './carousel-capacidades/carousel-capacidades.module';
import { SectorModule } from 'src/app/shared/components/sector/sector.module';
import { DevelopmentCardModule } from 'src/app/shared/components/development-card/development-card.module';
import { LineasTecnologicasModule } from './lineas-tecnologicas/lineas-tecnologicas.module';
import { ParticlesModule } from 'ng-particle';
import { HeroComponent } from './hero/hero.component';
import { HeroModule } from './hero/hero.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ClientCardModule,
    TarjetaCapacidadModule,
    CarouselCasoExitoModule,
    CarouselCapacidadesModule,
    SectorModule,
    DevelopmentCardModule,
    LineasTecnologicasModule,
    HeroModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
