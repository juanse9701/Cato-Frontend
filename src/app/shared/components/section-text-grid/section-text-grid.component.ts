import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';
/**
 * Componente encargado de renderizar una seccion, tiene como particularidad de que no importa el contenido
 * de las publicaciones el esta preparado para renderizar texto, esto bajo un estilo de grilla
 */
@Component({
  selector: 'app-section-text-grid',
  templateUrl: './section-text-grid.component.html',
  styleUrls: ['./section-text-grid.component.css']
})
export class SectionTextGridComponent implements OnInit {
  @Input() section: Section;

  /** @ignore */
  constructor() {}

  /** @ignore */
  ngOnInit() {}
}
