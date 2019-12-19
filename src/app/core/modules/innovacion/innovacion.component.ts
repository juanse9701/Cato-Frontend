import { Component, OnInit } from '@angular/core';
import { Seccion } from '../../../shared/components/tarjeta-seccion/tarjeta-seccion.component';

@Component({
  selector: 'app-innovacion',
  templateUrl: './innovacion.component.html',
  styleUrls: ['./innovacion.component.css']
})
export class InnovacionComponent implements OnInit {
  innovacion: Pagina = {
    nombre: 'Innovación y aplicaciones',
    descripcion: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    imagen: 'assets/img/aplicaciones.png',
    secciones: [
      {
        nombre: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitulo: 'Más de 20 marcas mundiales',
        contenido:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        imagen: 'assets/img/red.png'
      },
      {
        nombre: 'Realidad aumentada',
        id: 'realidad-aumentada',
        subtitulo: 'Más de 20 marcas mundiales',
        contenido:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        imagen: 'assets/img/red.png'
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}

export interface Pagina {
  nombre: string;
  imagen: string;
  descripcion: string;
  secciones: Seccion[];
}
