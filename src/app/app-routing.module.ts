import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./core/modules/nosotros/nosotros.module').then(m => m.NosotrosModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./core/modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: ':techLine',
    loadChildren: () => import('./core/modules/tech-lines-page/tech-lines-page.module').then(m => m.TechLinesPageModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})]
})
export class AppRoutingModule {}
