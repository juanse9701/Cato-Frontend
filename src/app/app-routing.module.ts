import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaComponent } from './prueba/pagina/pagina.component';

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
    path: 'innovacion',
    loadChildren: () => import('./core/modules/innovacion/innovacion.module').then(m => m.InnovacionModule)
  },
  {
    path: 'software',
    loadChildren: () => import('./core/modules/software/software.module').then(m => m.SoftwareModule)
  },
  {
    path: 'hardware',
    loadChildren: () => import('./core/modules/hardware/hardware.module').then(m => m.HardwareModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./core/modules/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'formacion',
    loadChildren: () => import('./core/modules/training/training.module').then(m => m.TrainingModule)
  },
  {
    path: 'prueba',
    component: PaginaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
