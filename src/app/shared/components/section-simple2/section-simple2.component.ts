import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-simple2',
  templateUrl: './section-simple2.component.html',
  styleUrls: ['./section-simple2.component.css']
})
export class SectionSimple2Component implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
