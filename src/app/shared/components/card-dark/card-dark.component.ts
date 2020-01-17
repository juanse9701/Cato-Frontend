import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-dark',
  templateUrl: './card-dark.component.html',
  styleUrls: ['./card-dark.component.css']
})
export class CardDarkComponent implements OnInit {
  @Input() data;
  @Input() index: number;
  @Output() changeActualIndex = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}
  cambiarActual(indice: number) {
    this.changeActualIndex.emit(indice);
  }
}
