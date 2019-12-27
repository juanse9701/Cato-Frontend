import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { SubMenuModule } from '../sub-menu/sub-menu.module';
import { SectionWithCollapsibleModule } from '../section-with-collapsible/section-with-collapsible.module';

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [CommonModule, SubMenuModule, SectionWithCollapsibleModule],
  exports: [PageLayoutComponent]
})
export class PageLayoutModule {}
