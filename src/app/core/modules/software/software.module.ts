import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareComponent } from './software.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SoftwareComponent
  }
];
@NgModule({
  declarations: [SoftwareComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageLayoutModule],
  exports: [SoftwareComponent]
})
export class SoftwareModule {}
