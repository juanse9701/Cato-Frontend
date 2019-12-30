import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechLinesPageComponent } from './tech-lines-page.component';
import { PageLayoutModule } from 'src/app/shared/components/page-layout/page-layout.module';

@NgModule({
  declarations: [TechLinesPageComponent],
  imports: [CommonModule, PageLayoutModule],
  exports: [TechLinesPageComponent]
})
export class TechLinesPageModule {}
