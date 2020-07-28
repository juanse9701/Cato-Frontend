import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';

/**
 * Componente Card-color
 *
 * es un tipo de tarjeta que recibira una publicación y asi mismo la renderizara, su particularidad es que tiene una imagen
 * de fondo que se combina con un filtro de color.
 */
@Component({
  selector: 'app-card-color',
  templateUrl: './card-color.component.html',
  styleUrls: ['./card-color.component.css']
})
export class CardColorComponent {
  @Input() post: Post;

  /**
   * @ignore
   */
  constructor() {}
}
