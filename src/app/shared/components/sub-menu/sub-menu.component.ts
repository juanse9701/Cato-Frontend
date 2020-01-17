import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

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
    // this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(e => {
    // console.log(this.location.path());
    this.locationName = this.location.path();
    // });
  }

  ngOnInit() {
    this.actual = this.secciones[0].nombre;
  }
}
