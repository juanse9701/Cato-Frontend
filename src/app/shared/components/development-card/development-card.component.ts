import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';
/**
 * Development card
 *
 * Componente que renderizara un post en una tarjeta, la caracteristica principal es que
 * maneja dos tipos de estilos, 'cuadrado' ó 'redondo' los cuales son leidos a traves de la
 * variable @see typeStyle
 */
@Component({
  selector: 'app-development-card',
  templateUrl: './development-card.component.html',
  styleUrls: ['./development-card.component.css']
})
export class DevelopmentCardComponent implements OnInit {
  @Input() post: Post;
  @Input() typeStyle: string;

/** @ignore */
  constructor() {}

/** @ignore */
  ngOnInit() {}
}
