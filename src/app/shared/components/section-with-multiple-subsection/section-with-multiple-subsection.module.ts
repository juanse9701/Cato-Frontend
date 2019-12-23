import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWithMultipleSubsectionComponent } from './section-with-multiple-subsection.component';
import { SectorModule } from '../sector/sector.module';

@NgModule({
  declarations: [SectionWithMultipleSubsectionComponent],
  imports: [CommonModule, SectorModule],
  exports: [SectionWithMultipleSubsectionComponent]
})
export class SectionWithMultipleSubsectionModule {}
