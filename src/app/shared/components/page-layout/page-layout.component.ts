import { Component, OnInit, Input } from '@angular/core';
import { Seccion } from '../tarjeta-seccion/tarjeta-seccion.component';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {
  @Input() pageContent: Pagina;
  constructor() {}

  ngOnInit() {}
}

export interface Pagina {
  nombre: string;
  imagen: string;
  descripcion: string;
  secciones: Seccion[];
}
