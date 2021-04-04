import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: ':pages',
    loadChildren: () => import('./pages/cato/cato.module').then(m => m.CatoModule)
  },
  // {
  //   path: ':techLine',
  //   loadChildren: () => import('./pages/tech-lines-page/tech-lines-page.module').then(m => m.TechLinesPageModule)
  // },
  {
    path: 'cato',
    loadChildren: () => import('./pages/cato/cato.module').then(m => m.CatoModule)
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
