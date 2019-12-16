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
    imagen: 'https://cdn2.hubspot.net/hubfs/498832/Imported_Blog_Media/redes-informaticas-4.png',
    secciones: [
      {
        nombre: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitulo: 'Más de 20 marcas mundiales',
        contenido:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        imagen: 'https://cdn2.hubspot.net/hubfs/498832/Imported_Blog_Media/redes-informaticas-4.png'
      },
      {
        nombre: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitulo: 'Más de 20 marcas mundiales',
        contenido:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        imagen: 'https://cdn2.hubspot.net/hubfs/498832/Imported_Blog_Media/redes-informaticas-4.png'
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
