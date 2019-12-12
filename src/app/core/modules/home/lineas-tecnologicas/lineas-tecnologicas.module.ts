import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineasTecnologicasComponent } from './lineas-tecnologicas.component';
import { TarjetaLineaTecnologicaModule } from '../tarjeta-linea-tecnologica/tarjeta-linea-tecnologica.module';

@NgModule({
  declarations: [LineasTecnologicasComponent],
  imports: [CommonModule, TarjetaLineaTecnologicaModule],
  exports: [LineasTecnologicasComponent]
})
export class LineasTecnologicasModule {}
