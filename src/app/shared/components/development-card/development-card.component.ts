import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-development-card',
  templateUrl: './development-card.component.html',
  styleUrls: ['./development-card.component.css']
})
export class DevelopmentCardComponent implements OnInit {
  @Input() data: Development;
  @Input() type: string;

  constructor() {}

  ngOnInit() {}
}

interface Development {
  description: string;
  title: string;
  img: string;
}
