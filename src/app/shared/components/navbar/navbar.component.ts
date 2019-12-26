import { Component, OnInit, HostListener } from '@angular/core';
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
  open: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 1) {
      let element = document.getElementById('header');
      element.classList.add('sticky');
    } else {
      let element = document.getElementById('header');
      element.classList.remove('sticky');
    }
  }
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

  openMenu(l1, l2, l3) {
    this.open = !this.open;
    if (this.open) {
      l1.classList.add('menu-button-line1');
      l2.classList.add('menu-button-line2');
      l3.classList.add('menu-button-line3');
      l1.classList.remove('menu-button-line1-out');
      l2.classList.remove('menu-button-line2-out');
      l3.classList.remove('menu-button-line3-out');
    } else {
      l1.classList.remove('menu-button-line1');
      l2.classList.remove('menu-button-line2');
      l3.classList.remove('menu-button-line3');
      l1.classList.add('menu-button-line1-out');
      l2.classList.add('menu-button-line2-out');
      l3.classList.add('menu-button-line3-out');
    }
  }
}
