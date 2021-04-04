import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWithScrollComponent } from './section-with-scroll.component';
import { CardDarkModule } from '../../cards/card-dark/card-dark.module';

@NgModule({
  declarations: [SectionWithScrollComponent],
  imports: [CommonModule, CardDarkModule],
  exports: [SectionWithScrollComponent]
})
export class SectionWithScrollModule {}
