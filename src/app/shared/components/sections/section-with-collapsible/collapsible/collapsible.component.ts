import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';
/**
 * Componente encargado de renderizar la informacion del post que el llega a traves de un componente padre
 */
@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {
  /** @ignore */
  @Input() data: any;
  @Input() post: Post;

  /** @ignore */
  constructor() {}

  /** @ignore */
  ngOnInit() {}
}
