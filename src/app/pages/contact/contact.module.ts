import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { MapModule } from './map/map.module';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];
@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MapModule],
  exports: [ContactComponent]
})
export class ContactModule {}
