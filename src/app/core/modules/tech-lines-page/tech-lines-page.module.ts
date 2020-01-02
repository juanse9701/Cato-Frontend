import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechLinesPageComponent } from './tech-lines-page.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: TechLinesPageComponent
  }
];
@NgModule({
  declarations: [TechLinesPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageLayoutModule],
  exports: [TechLinesPageComponent]
})
export class TechLinesPageModule {}
