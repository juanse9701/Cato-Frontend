import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';
/** Componente encargado de renderizar una publicacion en una tarjeta, se caracteriza por ser minimalista,
 * de hecho solo muestra una imagen.
 */
@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  @Input() sector: Post;
  buttonText = 'Ver más';
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  /**
   * Metodo encargado de mostrar los elementos que se encuentren ocultos, este sera
   * invocado por un evento  clic que estara solo disponible si la cantidad de elementos.
   *
   * @param element parametro de recibira un elemnto de tipo HTML
   */
  seeMore(element: any) {
    if (element.style.maxHeight) {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 20 + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', null);
      }, 20);
      this.buttonText = 'Ver más';
    } else {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 20 + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', 'initial');
      }, 210);
      this.buttonText = 'Ver menos';
    }
  }
}
