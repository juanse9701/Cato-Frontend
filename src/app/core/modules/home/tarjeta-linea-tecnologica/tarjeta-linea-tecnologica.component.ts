import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-linea-tecnologica',
  templateUrl: './tarjeta-linea-tecnologica.component.html',
  styleUrls: ['./tarjeta-linea-tecnologica.component.css']
})
export class TarjetaLineaTecnologicaComponent implements OnInit {
  @Input() lineaTecnologica: LineaTecnologica;
  @Input() index: number;

  constructor() {
    console.log(this.index);
  }

  ngOnInit() {}
}

export interface LineaTecnologica {
  nombre: string;
  descripcion: string;
  imagen: string;
}
