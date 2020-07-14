import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-card-dark',
  templateUrl: './card-dark.component.html',
  styleUrls: ['./card-dark.component.css']
})
export class CardDarkComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  @Output() changeActualIndex = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
  cambiarActual(indice: number) {
    this.changeActualIndex.emit(indice);
  }
}
