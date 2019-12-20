import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareComponent } from './hardware.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HardwareComponent
  }
];
@NgModule({
  declarations: [HardwareComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageLayoutModule],
  exports: [HardwareComponent]
})
export class HardwareModule {}
