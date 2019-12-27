import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleComponent } from './collapsible.component';

@NgModule({
  declarations: [CollapsibleComponent],
  imports: [CommonModule],
  exports: [CollapsibleComponent]
})
export class CollapsibleModule {}
