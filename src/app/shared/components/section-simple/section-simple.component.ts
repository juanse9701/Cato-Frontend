import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-simple',
  templateUrl: './section-simple.component.html',
  styleUrls: ['./section-simple.component.css']
})
export class SectionSimpleComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {}
}
