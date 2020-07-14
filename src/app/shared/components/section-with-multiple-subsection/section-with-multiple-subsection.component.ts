import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-section-with-multiple-subsection',
  templateUrl: './section-with-multiple-subsection.component.html',
  styleUrls: ['./section-with-multiple-subsection.component.css']
})
export class SectionWithMultipleSubsectionComponent implements OnInit {
  @Input() section: Section;
  @Input() background: string;
  constructor() {}

  ngOnInit() {}
}
