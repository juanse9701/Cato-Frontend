import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-tex-grid',
  templateUrl: './section-tex-grid.component.html',
  styleUrls: ['./section-tex-grid.component.css']
})
export class SectionTexGridComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
