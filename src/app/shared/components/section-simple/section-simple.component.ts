import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-section-simple',
  templateUrl: './section-simple.component.html',
  styleUrls: ['./section-simple.component.css']
})
export class SectionSimpleComponent implements OnInit {
  @Input() section: Section;
  constructor() {}

  ngOnInit() {}
}
