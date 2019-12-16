import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnovacionComponent } from './innovacion.component';
import { SubMenuModule } from 'src/app/shared/components/sub-menu/sub-menu.module';
import { TarjetaSeccionModule } from 'src/app/shared/components/tarjeta-seccion/tarjeta-seccion.module';

@NgModule({
  declarations: [InnovacionComponent],
  imports: [CommonModule, SubMenuModule, TarjetaSeccionModule],
  exports: [InnovacionComponent]
})
export class InnovacionModule {}
