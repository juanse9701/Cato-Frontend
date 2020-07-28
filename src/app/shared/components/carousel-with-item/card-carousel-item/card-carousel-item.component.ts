import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';
/**
 * Card Carosuel Item
 *
 * componente encargado de renderizar las tarjetas para el componente {@link CarouselWithItemComponent}
 */
@Component({
  selector: 'app-card-carousel-item',
  templateUrl: './card-carousel-item.component.html',
  styleUrls: ['./card-carousel-item.component.css']
})
export class CardCarouselItemComponent implements OnInit {

  /** @ignore */
  @Input() data: any;

  @Input() post: Post;

  /** @ignore */
  constructor() { }

  /** @ignore */
  ngOnInit() {
  }

}
