import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';
/**
 * Componente que renderiza una sección la cual puede contener multiples subsecciones,
 * al final por su diseño muestra solo la imagen de las publicaciones, pero cuenta con la opcion de
 * hacer una redirección.
 */
@Component({
  selector: 'app-section-with-multiple-subsection',
  templateUrl: './section-with-multiple-subsection.component.html',
  styleUrls: ['./section-with-multiple-subsection.component.css']
})
export class SectionWithMultipleSubsectionComponent implements OnInit {
  @Input() section: Section;
  @Input() background: string;

  /** @ignore */
  constructor() {}

  /** @ignore */
  ngOnInit() {}
}
