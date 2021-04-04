import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentCardComponent } from './development-card.component';



@NgModule({
  declarations: [ DevelopmentCardComponent],
  imports: [
    CommonModule
  ],
  exports: [DevelopmentCardComponent]
})
export class DevelopmentCardModule { }
