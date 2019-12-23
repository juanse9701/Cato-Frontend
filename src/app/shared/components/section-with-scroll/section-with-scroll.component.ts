import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-with-scroll',
  templateUrl: './section-with-scroll.component.html',
  styleUrls: ['./section-with-scroll.component.css']
})
export class SectionWithScrollComponent implements OnInit {
  @Input() data: any;
  itemActual: any;

  constructor() {}

  ngOnInit() {
    this.itemActual = this.data.items[0];
  }
  cambiarActual(index: number) {
    this.itemActual = this.data.items[index];
  }
}
