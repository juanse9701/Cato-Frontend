import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/core/interface/page.interface';
/**
 * Componente que sirve como layout para las rutas que hagan match con ./:techline
 */
@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {
  @Input() title: string;
  @Input() page: Page;

  /** @ignore */
  constructor() {}

  /** @ignore */
  ngOnInit() {}
}
