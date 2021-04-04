import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatoComponent } from './cato.component';

const routes: Routes = [
  {
    path: '',
    component: CatoComponent
  },
  {
    path: ':pages',
    component: CatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatoRoutingModule { }
