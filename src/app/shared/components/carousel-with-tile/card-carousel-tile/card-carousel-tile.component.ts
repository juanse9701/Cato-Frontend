import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-carousel-tile',
  templateUrl: './card-carousel-tile.component.html',
  styleUrls: ['./card-carousel-tile.component.css']
})
export class CardCarouselTileComponent implements OnInit {
  @Input() data;
  constructor() {}

  ngOnInit() {}
}
