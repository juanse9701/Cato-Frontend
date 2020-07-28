import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';

/**
 * Card Carosuel Item
 *
 * componente encargado de renderizar las tarjetas para el componente {@link CarouselWithTileComponent}
 */
@Component({
  selector: 'app-card-carousel-tile',
  templateUrl: './card-carousel-tile.component.html',
  styleUrls: ['./card-carousel-tile.component.css']
})
export class CardCarouselTileComponent implements OnInit {
  @Input() post: Post;
  /** @ignore */
  constructor() {}

  /** @ignore */
  ngOnInit() {}
}
