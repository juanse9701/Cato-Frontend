import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  @Input() sector: any;
  buttonText: string = 'Ver más';
  constructor() {}

  ngOnInit() {}

  verMas(elemento) {
    if (elemento.style.maxHeight) {
      elemento.style.maxHeight = elemento.scrollHeight + 20 + 'px';
      setTimeout(() => {
        elemento.style.maxHeight = null;
      }, 20);
      this.buttonText = 'Ver más';
    } else {
      elemento.style.maxHeight = elemento.scrollHeight + 20 + 'px';
      setTimeout(() => {
        elemento.style.maxHeight = 'initial';
      }, 210);
      this.buttonText = 'Ver menos';
    }
    console.log(elemento);
  }
}
