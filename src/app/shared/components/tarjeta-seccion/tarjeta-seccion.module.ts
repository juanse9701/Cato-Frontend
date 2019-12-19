import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaSeccionComponent } from './tarjeta-seccion.component';
import { DesplegableModule } from './desplegable/desplegable.module';

@NgModule({
  declarations: [TarjetaSeccionComponent],
  imports: [CommonModule, DesplegableModule],
  exports: [TarjetaSeccionComponent]
})
export class TarjetaSeccionModule {}
