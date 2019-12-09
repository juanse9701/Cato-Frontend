import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tarjeta-caso-exito',
  templateUrl: './tarjeta-caso-exito.component.html',
  styleUrls: ['./tarjeta-caso-exito.component.css']
})
export class TarjetaCasoExitoComponent implements OnInit {

  @Input() caso: CasoExito;

  constructor() { }

  ngOnInit() {
  }

}

export interface CasoExito {
  imagen: string;
  titulo: string;
  descripcion: string;
}
