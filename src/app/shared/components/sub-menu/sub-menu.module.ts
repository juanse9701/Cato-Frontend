import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from './sub-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SubMenuComponent],
  imports: [CommonModule, RouterModule],
  exports: [SubMenuComponent]
})
export class SubMenuModule {}
