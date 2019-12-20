import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent
  }
];
@NgModule({
  declarations: [TrainingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageLayoutModule],
  exports: [TrainingComponent]
})
export class TrainingModule {}
