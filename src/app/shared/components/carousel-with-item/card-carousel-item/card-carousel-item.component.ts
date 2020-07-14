import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-card-carousel-item',
  templateUrl: './card-carousel-item.component.html',
  styleUrls: ['./card-carousel-item.component.css']
})
export class CardCarouselItemComponent implements OnInit {

  @Input() data: any;
  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
