import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Renderer2,
  HostListener,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

/**
 * Componente encargado de renderizar una sección, esta se caracteriza por manejar una grilla de elementos,
 * en caso de que sean muchos elementos el componente limitara los elementos en pantalla pero habilitara un boton
 * para ver los que se queden ocultos.
 */
@Component({
  selector: 'app-section-with-collapsible-grid',
  templateUrl: './section-with-collapsible-grid.component.html',
  styleUrls: ['./section-with-collapsible-grid.component.css']
})
export class SectionWithCollapsibleGridComponent implements OnInit, AfterViewInit {
  @Input() section: Section;

  buttonText = 'Ver más';
  showMore = true;

  /** variable que guarda el numero maximo de lineas que tendra la grilla segun la cantidad de elementos */
  lineas: number;

  @ViewChild('cards', { static: false }) cards: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.evaluateShowMore();
  }

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.lineas = this.section.posts.length >= 4 ? 2 : 1;
  }

  ngAfterViewInit() {
    this.evaluateShowMore();
    this.cdr.detectChanges();
  }

  /**
   * @method seeMore
   * @param element parametro de recibira un elemnto de tipo HTML
   *
   * Metodo encargado de mostrar los elementos que se encuentren ocultos, este sera
   * invocado por un evento  clic que estara solo disponible si la cantidad de elementos supera
   * las lineas de la grilla
   */
  seeMore(element: any) {
    if (element.style.maxHeight) {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', null);
      }, 20);
      this.buttonText = 'Ver más';
    } else {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', 'initial');
      }, 210);
      this.buttonText = 'Ver menos';
    }
  }

  /**
   * @method evaluateShowMore
   *
   * Método encargado de evaluar si debe o no debe aparecer el boton de mostra mas elementos.
   */
  evaluateShowMore() {
    if (this.cards) {
      const boxes = this.cards.nativeElement.children;
      const box1 = boxes[0];
      const colCnt = Math.floor(this.cards.nativeElement.offsetWidth / box1.clientWidth); // Number of Column;
      const rowCnt = Math.ceil(boxes.length / colCnt); // Number of Rows
      if (rowCnt <= this.lineas) {
        this.showMore = false;
      }
      if (rowCnt > this.lineas) {
        this.showMore = true;
      }
    }
  }
}
