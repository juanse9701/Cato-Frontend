import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-color',
  templateUrl: './card-color.component.html',
  styleUrls: ['./card-color.component.css']
})
export class CardColorComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit() {}
}
