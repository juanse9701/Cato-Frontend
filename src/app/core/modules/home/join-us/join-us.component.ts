import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';

/**
 * Componente encargado de renderizar una sección la cual se caracteriza porque las publicaciones,
 * son visualizadas como botones o pilas.
 */
@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() posts: Post[];
  constructor() {
    this.title = 'Esperando un titulo...';
    this.description = 'Esperando una descripción...';
    this.posts = [];
  }

  ngOnInit() {}
}
