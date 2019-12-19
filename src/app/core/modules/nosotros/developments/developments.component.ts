import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.css']
})
export class DevelopmentsComponent implements OnInit {
  @Input() desarrollos: any[];
  @Input() type: string;
  @Input() title: string;
  buttonText: string = 'Ver más';
  showMore: boolean = true;

  @ViewChild('cards', { static: false }) cards: ElementRef;

  constructor() {}

  ngOnInit() {
    console.log(window.screen.width);
  }

  verMas(elemento) {
    if (elemento.style.maxHeight) {
      elemento.style.maxHeight = elemento.scrollHeight + 'px';
      setTimeout(() => {
        elemento.style.maxHeight = null;
      }, 20);
      this.buttonText = 'Ver más';
    } else {
      elemento.style.maxHeight = elemento.scrollHeight + 'px';
      setTimeout(() => {
        elemento.style.maxHeight = 'initial';
      }, 210);
      this.buttonText = 'Ver menos';
    }
    console.log(elemento);
  }
}
