import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { SectionWithCollapsibleComponent } from './section-with-collapsible.component';
import { CollapsibleModule } from './collapsible/collapsible.module';

@NgModule({
  declarations: [SectionWithCollapsibleComponent],
  imports: [CommonModule, CollapsibleModule],
  exports: [SectionWithCollapsibleComponent]
})
export class SectionWithCollapsibleModule {}
