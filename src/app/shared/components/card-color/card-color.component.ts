import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-card-color',
  templateUrl: './card-color.component.html',
  styleUrls: ['./card-color.component.css']
})
export class CardColorComponent implements OnInit {
  @Input() post: Post;
  constructor() {}

  ngOnInit() {}
}
