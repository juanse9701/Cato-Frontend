import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-carousel-item',
  templateUrl: './card-carousel-item.component.html',
  styleUrls: ['./card-carousel-item.component.css']
})
export class CardCarouselItemComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
