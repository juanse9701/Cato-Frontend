import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tipo: string;
  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe(event => {
      if (this.location.path() === '') {
        this.tipo = 'home';
      } else {
        this.tipo = '';
      }
    });
  }

  ngOnInit() {}
}
