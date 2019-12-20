import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
];
@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PageLayoutModule],
  exports: [ProjectsComponent]
})
export class ProjectsModule {}
