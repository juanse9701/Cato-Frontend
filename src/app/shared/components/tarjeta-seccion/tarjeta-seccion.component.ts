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
  verMas(elemento) {
    if (elemento.style.maxHeight) {
      elemento.style.maxHeight = elemento.scrollHeight + 'px';
      setTimeout(() => {
        elemento.style.maxHeight = null;
      }, 20);
    } else {
      elemento.style.maxHeight = elemento.scrollHeight + 'px';
      setTimeout(() => {
        elemento.style.maxHeight = 'initial';
      }, 210);
    }
    console.log(elemento);
  }
}
export interface Seccion {
  nombre: string;
  id: string;
  subtitulo: string;
  contenido: string;
  imagen: string;
}
