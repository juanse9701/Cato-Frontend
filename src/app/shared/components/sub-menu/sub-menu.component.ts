import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements OnInit {
  @Input() secciones: any[];
  @Input() title: string;
  actual: string;

  locationName: string;
  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe(event => {
      console.log(this.location.path());
      this.locationName = this.location.path();
    });
  }

  ngOnInit() {
    this.actual = this.secciones[0].nombre;
    console.log(this.actual);
  }
}
