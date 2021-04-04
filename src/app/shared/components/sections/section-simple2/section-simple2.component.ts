import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

/**
 * Componente necargado de renderizar una sección, se caracteriza ya que recibe un color de fondo
 * dentro de su información aplicandolo al componente.
 */
@Component({
  selector: 'app-section-simple2',
  templateUrl: './section-simple2.component.html',
  styleUrls: ['./section-simple2.component.css']
})
export class SectionSimple2Component implements OnInit {
  @Input() section: Section;
  style = {};

  /** @ignore */
  constructor() {}

  ngOnInit() {
    this.style = {
      'background-color': this.section.color
    };
  }
}
