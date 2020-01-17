import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../section-with-collapsible/section-with-collapsible.component';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {
  @Input() pageContent: Pagina;
  constructor() {}

  ngOnInit() {}
}

export interface Pagina {
  id: string;
  title: string;
  img: string;
  description: string;
  sections: Section[];
}
