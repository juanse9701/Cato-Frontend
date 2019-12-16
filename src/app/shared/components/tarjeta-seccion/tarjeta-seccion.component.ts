import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-seccion',
  templateUrl: './tarjeta-seccion.component.html',
  styleUrls: ['./tarjeta-seccion.component.css']
})
export class TarjetaSeccionComponent implements OnInit {
  @Input() seccion: Seccion;

  constructor() {}
  ngOnInit() {}
}

export interface Seccion {
  nombre: string;
  id: string;
  subtitulo: string;
  contenido: string;
  imagen: string;
}
