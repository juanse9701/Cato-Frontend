import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSimple2Component } from './section-simple2.component';
import { CardColorModule } from '../cards/card-color/card-color.module';

@NgModule({
  declarations: [SectionSimple2Component],
  imports: [CommonModule, CardColorModule],
  exports: [SectionSimple2Component]
})
export class SectionSimple2Module {}
