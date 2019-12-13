import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelopmentsComponent } from './developments.component';
import { DevelopmentCardModule } from 'src/app/shared/components/development-card/development-card.module';

@NgModule({
  declarations: [DevelopmentsComponent],
  imports: [CommonModule, DevelopmentCardModule],
  exports: [DevelopmentsComponent]
})
export class DevelopmentsModule {}
