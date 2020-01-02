import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-text-grid',
  templateUrl: './section-text-grid.component.html',
  styleUrls: ['./section-text-grid.component.css']
})
export class SectionTextGridComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
