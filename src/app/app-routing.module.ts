import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './core/modules/nosotros/nosotros.component';
import { InnovacionComponent } from './core/modules/innovacion/innovacion.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'innovacion',
    component: InnovacionComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
