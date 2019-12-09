import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientCardComponent} from './client-card.component';



@NgModule({
  declarations: [
    ClientCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientCardComponent
  ]
})
export class ClientCardModule { }
