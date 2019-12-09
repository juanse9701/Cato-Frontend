import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {DevelopmentCardComponent} from '../../../shared/components/development-card/development-card.component';
import {RouterModule, Routes} from '@angular/router';
import {ClientCardComponent} from '../../../shared/components/client-card/client-card.component';
import {SectorComponent} from '../../../shared/components/sector/sector.component';
import { TarjetaCasoExitoComponent } from './tarjeta-caso-exito/tarjeta-caso-exito.component';
import { TarjetaLineaTecnologicaComponent } from './tarjeta-linea-tecnologica/tarjeta-linea-tecnologica.component';
import {AppModule} from '../../../app.module';
import {CarouselModule} from '../../../shared/components/carousel/carousel.module';
import {ClientCardModule} from '../../../shared/components/client-card/client-card.module';

const  routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    DevelopmentCardComponent,
    SectorComponent,
    TarjetaLineaTecnologicaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
    ClientCardModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
