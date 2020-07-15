import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-card-logo',
  templateUrl: './card-logo.component.html',
  styleUrls: ['./card-logo.component.css']
})
export class CardLogoComponent implements OnInit {
  @Input() extrapost: Post;

  constructor() {}

  ngOnInit() {}
}
