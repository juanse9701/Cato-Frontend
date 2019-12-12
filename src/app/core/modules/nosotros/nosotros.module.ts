import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros.component';
import { SectorModule } from 'src/app/shared/components/sector/sector.module';
import { DevelopmentCardModule } from 'src/app/shared/components/development-card/development-card.module';

@NgModule({
  declarations: [NosotrosComponent],
  imports: [CommonModule, SectorModule, DevelopmentCardModule],
  exports: [NosotrosComponent]
})
export class NosotrosModule {}
