import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {DevelopmentCardComponent} from '../../../shared/components/development-card/development-card.component';
import {RouterModule, Routes} from '@angular/router';
import {ClientCardComponent} from '../../../shared/components/client-card/client-card.component';
import {SectorComponent} from '../../../shared/components/sector/sector.component';

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
    ClientCardComponent,
    SectorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
