import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SliderComponent],
  imports: [CommonModule, NgbCarouselModule],
  exports: [SliderComponent]
})
export class SliderModule {}
