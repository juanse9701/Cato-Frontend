import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';

/**
 * es un tipo de tarjeta que recibira una publicación, un indice y emitira el mismo cuando den clic sobre la misma,
 * asi mismo la renderizara, su particularidad es que es de color oscuro.
 */
@Component({
  selector: 'app-card-dark',
  templateUrl: './card-dark.component.html',
  styleUrls: ['./card-dark.component.css']
})
export class CardDarkComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  @Output() changeActualIndex = new EventEmitter<number>();

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit() {}

  /**
   * Función que se activa dando clic sobre la trajeta, esta encargada de emitir el valor que le llega por parametro
   * para esto hace uso de la variable de salida (@output) changeActualIndex.
   *
   * @param indice parametro que toma el valor de la tarjeta, tiene relación directa con el parametro
   */
  cambiarActual(indice: number) {
    this.changeActualIndex.emit(indice);
  }
}
