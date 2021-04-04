import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';
/**
 * Componente que se encarga de renderizar una sección la cual llega a traves de la variable
 *  [section]{@link #section} , como su nombre indica intenta ser lo mas simple posible mostrando justo lo necesario.
 */
@Component({
  selector: 'app-section-simple',
  templateUrl: './section-simple.component.html',
  styleUrls: ['./section-simple.component.css']
})
export class SectionSimpleComponent implements OnInit {
  @Input() section: Section;

  /** @ignore */
  constructor() {}

  /** @ignore */
  ngOnInit() {}
}
