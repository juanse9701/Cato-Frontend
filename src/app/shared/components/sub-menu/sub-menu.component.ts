import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {
  @Input() secciones: any[];
  actual: string;
  constructor() {}

  ngOnInit() {
    this.actual = this.secciones[0].nombre;
    console.log(this.actual);
  }
}
