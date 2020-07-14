import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-development-card',
  templateUrl: './development-card.component.html',
  styleUrls: ['./development-card.component.css']
})
export class DevelopmentCardComponent implements OnInit {
  @Input() post: Post;
  @Input() typeStyle: string;

  constructor() {}

  ngOnInit() {}
}
