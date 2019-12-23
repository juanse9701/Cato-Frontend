import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  secciones = [
    {
      id: 'componente2',
      img: 'https://i.blogs.es/a19bfc/testing/450_1000.jpg',
      titulo: 'Titulo seccion 1',
      descripcion: 'Descripción de los componentes'
    },
    {
      id: 'componente2',
      img: 'https://i.blogs.es/a19bfc/testing/450_1000.jpg',
      titulo: 'Titulo seccion 2',
      descripcion: 'Descripción de los componentes'
    },
    {
      id: 'componente1',
      img: 'https://i.blogs.es/a19bfc/testing/450_1000.jpg',
      titulo: 'Titulo seccion 3',
      descripcion: 'Descripción de los componentes'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
