import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnovacionComponent } from './innovacion.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InnovacionComponent
  }
];
@NgModule({
  declarations: [InnovacionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageLayoutModule],
  exports: [InnovacionComponent]
})
export class InnovacionModule {}
