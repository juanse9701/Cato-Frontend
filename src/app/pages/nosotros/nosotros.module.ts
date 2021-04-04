import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionWithMultipleSubsectionModule } from 'src/app/shared/components/sections/section-with-multiple-subsection/section-with-multiple-subsection.module';
import { SectionTextGridModule } from 'src/app/shared/components/sections/section-text-grid/section-text-grid.module';
import { SectionWithCollapsibleGridModule } from 'src/app/shared/components/sections/section-with-collapsible-grid/section-with-collapsible-grid.module';
import { SectionSimple2Module } from 'src/app/shared/components/sections/section-simple2/section-simple2.module';
import { CarouselMediaModule } from 'src/app/shared/components/carousel-media/carousel-media.module';
import { Image360Module } from 'src/app/shared/components/image360/image360.module';

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
    SectionSimple2Module,
    CarouselMediaModule,
    Image360Module
  ],
  exports: [NosotrosComponent]
})
export class NosotrosModule {}
