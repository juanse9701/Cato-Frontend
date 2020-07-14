import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-section-with-scroll',
  templateUrl: './section-with-scroll.component.html',
  styleUrls: ['./section-with-scroll.component.css']
})
export class SectionWithScrollComponent implements OnInit {
  @Input() section: Section;
  itemActual: any;

  constructor() {}

  ngOnInit() {
    this.itemActual = this.section.posts[0] || {};
  }

  cambiarActual(index: number) {
    this.itemActual = this.section.posts[index];
  }

}
