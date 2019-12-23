import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-with-carousel1',
  templateUrl: './section-with-carousel1.component.html',
  styleUrls: ['./section-with-carousel1.component.css']
})
export class SectionWithCarousel1Component implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {}
}
