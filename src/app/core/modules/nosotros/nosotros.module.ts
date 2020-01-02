import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionWithMultipleSubsectionModule } from 'src/app/shared/components/section-with-multiple-subsection/section-with-multiple-subsection.module';
import { SectionTextGridModule } from 'src/app/shared/components/section-text-grid/section-text-grid.module';
import { SectionWithCollapsibleGridModule } from 'src/app/shared/components/section-with-collapsible-grid/section-with-collapsible-grid.module';
import { SectionSimple2Module } from 'src/app/shared/components/section-simple2/section-simple2.module';

const routes: Routes = [
  {
    path: '',
    component: NosotrosComponent
  }
];
@NgModule({
  declarations: [NosotrosComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SectionWithMultipleSubsectionModule,
    SectionTextGridModule,
    SectionWithCollapsibleGridModule,
    SectionSimple2Module
  ],
  exports: [NosotrosComponent]
})
export class NosotrosModule {}
