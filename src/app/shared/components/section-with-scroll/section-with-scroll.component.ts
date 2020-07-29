import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

/**
 * Componenete que renderiza una seccion y su lista de publicaciones,
 * tiene como caracteristica que en caso de haer muchos elementos agrega un scroll vertical
 */
@Component({
  selector: 'app-section-with-scroll',
  templateUrl: './section-with-scroll.component.html',
  styleUrls: ['./section-with-scroll.component.css']
})
export class SectionWithScrollComponent implements OnInit {
  @Input() section: Section;

  /** variable que guardará el post el cual el ususario ha seleccionado */
  itemActual: any;

  /** @ignore */
  constructor() {}

  ngOnInit() {
    this.itemActual = this.section.posts[0] || {};
  }

  /**
   * @method cambiarActual
   * @param index parametro de tipo numerico que guardara el indice del post seleccionado
   *
   * Método encargado de actualizar la seleccion del usuario apoyandose del parametro index,
   * es invocado mediante el evento clic
   */
  cambiarActual(index: number) {
    this.itemActual = this.section.posts[index];
  }

}
