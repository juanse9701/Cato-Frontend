import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentCardModule } from '../../cards/development-card/development-card.module';
import { SectionWithCollapsibleGridComponent } from './section-with-collapsible-grid.component';

@NgModule({
  declarations: [SectionWithCollapsibleGridComponent],
  imports: [CommonModule, DevelopmentCardModule],
  exports: [SectionWithCollapsibleGridComponent]
})
export class SectionWithCollapsibleGridModule {}
