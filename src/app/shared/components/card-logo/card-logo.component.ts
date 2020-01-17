import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-logo',
  templateUrl: './card-logo.component.html',
  styleUrls: ['./card-logo.component.css']
})
export class CardLogoComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit() {}
}
