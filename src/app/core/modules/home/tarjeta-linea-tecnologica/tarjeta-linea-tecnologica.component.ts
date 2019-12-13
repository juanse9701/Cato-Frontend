import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tarjeta-linea-tecnologica',
  templateUrl: './tarjeta-linea-tecnologica.component.html',
  styleUrls: ['./tarjeta-linea-tecnologica.component.css']
})
export class TarjetaLineaTecnologicaComponent implements OnInit {
  @Input() lineaTecnologica: LineaTecnologica;
  @Input() index: number;
  @Output() changeActualIndex = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  cambiarActual(indice: number) {
    this.changeActualIndex.emit(indice);
  }
}

export interface LineaTecnologica {
  nombre: string;
  descripcion: string;
  imagen: string;
}
