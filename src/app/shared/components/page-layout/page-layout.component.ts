import { Component, OnInit, Input } from '@angular/core';
import { Page } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent implements OnInit {
  @Input() title: string;
  @Input() page: Page;
  constructor() {}

  ngOnInit() {}
}
