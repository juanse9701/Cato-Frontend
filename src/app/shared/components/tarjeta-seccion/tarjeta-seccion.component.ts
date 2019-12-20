import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-seccion',
  templateUrl: './tarjeta-seccion.component.html',
  styleUrls: ['./tarjeta-seccion.component.css']
})
export class TarjetaSeccionComponent implements OnInit {
  @Input() seccion: Seccion;
  informacionActual: any;
  mostrar: boolean[] = [];

  constructor() {}

  ngOnInit() {
    this.informacionActual = this.seccion.informacion[0];
    for (const i in this.seccion.informacion) {
      this.mostrar.push(false);
    }
  }
  verMas(elemento, index) {
    this.cambiarMostrarActual(index);
    if (this.mostrar[index]) {
      elemento.style.maxHeight = elemento.scrollHeight + 'px';
      setTimeout(() => {
        elemento.style.maxHeight = 'initial';
      }, 210);
    } else {
      elemento.style.maxHeight = elemento.scrollHeight + 'px';
      setTimeout(() => {
        elemento.style.maxHeight = null;
      }, 20);
    }
  }
  cambiarMostrarActual(index) {
    for (let i = 0; i < this.mostrar.length; i++) {
      if (i === index) {
        this.mostrar[i] = !this.mostrar[i];
      } else {
        this.mostrar[i] = false;
      }
    }
    this.informacionActual = this.seccion.informacion[index];
  }
  algunoDesplegado(): boolean {
    for (const i in this.mostrar) {
      if (this.mostrar[i]) {
        return true;
      }
    }
    return false;
  }
  cambiarActual(index) {
    this.informacionActual = this.seccion.informacion[index];
  }
}
export interface Seccion {
  nombre: string;
  id: string;
  subtitulo: string;
  contenido: string;
  imagen: string;
  botones: Boton[];
  informacion: Object[];
}

export interface Boton {
  estilo: number;
  contenido: string;
  color: string;
  background: string;
  img?: string;
  imgIcono?: string;
  imgCheck?: string;
}
