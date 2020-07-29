import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Section, Post } from 'src/app/core/interface/page.interface';
/**
 * Componente encargado de renderizar una sección, este incluye distintas caracteristicas
 * como el titulo, subtitulo, descripcion y extrapost que son colapsables por el usuario
 */
@Component({
  selector: 'app-section-with-collapsible',
  templateUrl: './section-with-collapsible.component.html',
  styleUrls: ['./section-with-collapsible.component.css']
})
export class SectionWithCollapsibleComponent implements OnInit {
  @Input() section: Section;
  extraposts: Post[];
  actualData: Post;
  actualDataIndex: number;
  show: boolean[] = [];

  /** @ignore */
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.extraposts = this.section.posts && this.section.posts[0].extraposts;
    this.actualData = this.extraposts && this.extraposts[0];
    this.show = this.extraposts && this.extraposts.map( v => false);
  }

  /**
   * @method seeMore
   * @param element Parametro que contiene el elemento HTML donde sera renderizado el contenido
   * @param index Parametro que contiene el identificador númerico del elemento
   *
   * @description
   * Método encargado de mostrar la información de la tarjeta que ha sido solicitada, ya que por defecto se encuentra colapsada,
   * para esto se apoya en el metodo {@link changeShowActual} que cambia el estado (true(visualizado):false(no visualizado)),
   * en caso de que el elemento este en un estado de true, la función afectara el tamaño del elemento HTML y mostrara el contenido.
   */
  seeMore(element: any, index: number) {
    this.changeShowActual(index);
    if (this.show[index]) {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', 'initial');
      }, 210);
    } else {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', null);
      }, 20);
    }
  }

  /**
   * @method changeShowActual
   * @param index parametro de tipo number
   *
   * @description
   * Método encargado de cambiar el estado (true:false) de un elemento en el arreglo show haciendo uso del parametro index, a su vez asigna
   * los nuevos valores de actualData y actualDataIndex
   */
  changeShowActual(index: number) {
    this.show = this.show.map((v: boolean, i: number) => i === index ? !v : v );
    this.actualData = this.extraposts[index];
    this.actualDataIndex = index;
  }

}

