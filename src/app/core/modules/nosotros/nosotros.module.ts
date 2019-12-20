import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros.component';
import { SectorModule } from 'src/app/shared/components/sector/sector.module';
import { DevelopmentCardModule } from 'src/app/shared/components/development-card/development-card.module';
import { DevelopmentsComponent } from './developments/developments.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NosotrosComponent
  }
];
@NgModule({
  declarations: [NosotrosComponent, DevelopmentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SectorModule, DevelopmentCardModule],
  exports: [NosotrosComponent]
})
export class NosotrosModule {}
