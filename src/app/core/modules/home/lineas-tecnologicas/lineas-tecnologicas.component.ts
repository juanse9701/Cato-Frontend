import { Component, OnInit, Input } from '@angular/core';
import { LineaTecnologica } from '../tarjeta-linea-tecnologica/tarjeta-linea-tecnologica.component';
@Component({
  selector: 'app-lineas-tecnologicas',
  templateUrl: './lineas-tecnologicas.component.html',
  styleUrls: ['./lineas-tecnologicas.component.css']
})
export class LineasTecnologicasComponent implements OnInit {
  @Input() lineasTecnologicas: LineaTecnologica[];

  lineaActual: LineaTecnologica;
  constructor() {}

  ngOnInit() {
    this.lineaActual = this.lineasTecnologicas[0];
  }
  cambiarActual(index: number) {
    this.lineaActual = this.lineasTecnologicas[index];
  }
}
