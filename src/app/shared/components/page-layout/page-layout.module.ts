import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaSeccionModule } from '../tarjeta-seccion/tarjeta-seccion.module';
import { PageLayoutComponent } from './page-layout.component';
import { SubMenuModule } from '../sub-menu/sub-menu.module';

@NgModule({
  declarations: [PageLayoutComponent],
  imports: [CommonModule, TarjetaSeccionModule, SubMenuModule],
  exports: [PageLayoutComponent]
})
export class PageLayoutModule {}
