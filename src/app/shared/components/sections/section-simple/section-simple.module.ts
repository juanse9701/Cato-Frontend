import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSimpleComponent } from './section-simple.component';
import { DevelopmentCardModule } from '../../cards/development-card/development-card.module';

@NgModule({
  declarations: [SectionSimpleComponent],
  imports: [CommonModule, DevelopmentCardModule],
  exports: [SectionSimpleComponent]
})
export class SectionSimpleModule {}
