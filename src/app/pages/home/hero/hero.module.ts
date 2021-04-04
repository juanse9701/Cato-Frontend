import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { ParticlesModule } from 'ng-particle';



@NgModule({
  declarations: [HeroComponent],
  imports: [
    CommonModule,
    ParticlesModule
  ],
  exports:[HeroComponent]
})
export class HeroModule { }
