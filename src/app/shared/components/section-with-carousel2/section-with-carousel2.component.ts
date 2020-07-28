import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-section-with-carousel2',
  templateUrl: './section-with-carousel2.component.html',
  styleUrls: ['./section-with-carousel2.component.css']
})
export class SectionWithCarousel2Component implements OnInit {
  @Input() section: Section;
  @Input() menu: boolean;

  constructor() {}

  ngOnInit() {}
}
