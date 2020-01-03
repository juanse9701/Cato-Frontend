import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./core/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./core/modules/nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path: ':techLine',
    loadChildren: () => import('./core/modules/tech-lines-page/tech-lines-page.module').then(m => m.TechLinesPageModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
