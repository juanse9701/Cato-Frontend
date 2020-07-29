import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

/**
 * Componente encargado de renderizar una seccion con un carousel como principal componente,
 * en este caso el carousel-with-tile [CarouselWithTileComponent]{@link }
 */
@Component({
  selector: 'app-section-with-carousel2',
  templateUrl: './section-with-carousel2.component.html',
  styleUrls: ['./section-with-carousel2.component.css']
})
export class SectionWithCarousel2Component implements OnInit {
  @Input() section: Section;
  @Input() menu: boolean;

  /** @ignore */
  constructor() {}
  /** @ignore */
  ngOnInit() {}
}
