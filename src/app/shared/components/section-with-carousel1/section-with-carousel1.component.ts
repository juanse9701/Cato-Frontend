import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-section-with-carousel1',
  templateUrl: './section-with-carousel1.component.html',
  styleUrls: ['./section-with-carousel1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionWithCarousel1Component implements AfterViewInit {
  @Input() data;
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
