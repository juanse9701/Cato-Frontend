import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

/**
 * Componente que renderiza componente que tiene como funcionalidad principal el un caruousel,
 * en este caso esta combinado con el [carousel-with-item]{@link CarouselWithItemComponent}
 */
@Component({
  selector: 'app-section-with-carousel1',
  templateUrl: './section-with-carousel1.component.html',
  styleUrls: ['./section-with-carousel1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionWithCarousel1Component implements AfterViewInit {
  /** @ignore */
  @Input() data;
  @Input() section: Section;
  @Input() menu: boolean;

  style = {};

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.style = {
      'background-color': this.section.color
    };
  }
}
