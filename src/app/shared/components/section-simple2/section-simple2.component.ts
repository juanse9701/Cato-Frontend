import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-section-simple2',
  templateUrl: './section-simple2.component.html',
  styleUrls: ['./section-simple2.component.css']
})
export class SectionSimple2Component implements OnInit {
  @Input() section: Section;
  style = {};
  constructor() {}

  ngOnInit() {
    this.style = {
      'background-color': this.section.color
    };
  }
}
