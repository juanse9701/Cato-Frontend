import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-with-multiple-subsection',
  templateUrl: './section-with-multiple-subsection.component.html',
  styleUrls: ['./section-with-multiple-subsection.component.css']
})
export class SectionWithMultipleSubsectionComponent implements OnInit {
  @Input() data;
  @Input() background;
  constructor() {}

  ngOnInit() {}
}
