import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorComponent } from './sector.component';
import { CardLogoModule } from '../cards/card-logo/card-logo.module';

@NgModule({
  declarations: [SectorComponent],
  imports: [CommonModule, CardLogoModule],
  exports: [SectorComponent]
})
export class SectorModule {}
