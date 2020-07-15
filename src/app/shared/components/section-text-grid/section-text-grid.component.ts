import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-section-text-grid',
  templateUrl: './section-text-grid.component.html',
  styleUrls: ['./section-text-grid.component.css']
})
export class SectionTextGridComponent implements OnInit {
  @Input() section: Section;
  constructor() {}

  ngOnInit() {}
}
