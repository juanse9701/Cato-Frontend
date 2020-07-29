import { Component, OnInit, Input } from '@angular/core';
/**
 * Componente encargado de renderizar el footer de la aplicación, el cual llega como texto enriquecido en un string.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footer: string;

  /** @ignore */
  constructor() { }

  /** @ignore */
  ngOnInit() {
  }

}
