import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tipo: string;
  open: boolean = false;

  @ViewChild('header', { static: false }) header: ElementRef;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 1) {
      this.renderer.addClass(this.header.nativeElement, 'sticky');
    } else {
      this.renderer.removeClass(this.header.nativeElement, 'sticky');
    }
  }
  constructor(private router: Router, private location: Location, private renderer: Renderer2) {
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
      this.renderer.addClass(l1, 'menu-button-line1');
      this.renderer.addClass(l2, 'menu-button-line2');
      this.renderer.addClass(l3, 'menu-button-line3');
      this.renderer.removeClass(l1, 'menu-button-line1-out');
      this.renderer.removeClass(l2, 'menu-button-line2-out');
      this.renderer.removeClass(l3, 'menu-button-line3-out');
    } else {
      this.renderer.removeClass(l1, 'menu-button-line1');
      this.renderer.removeClass(l2, 'menu-button-line2');
      this.renderer.removeClass(l3, 'menu-button-line3');
      this.renderer.addClass(l1, 'menu-button-line1-out');
      this.renderer.addClass(l2, 'menu-button-line2-out');
      this.renderer.addClass(l3, 'menu-button-line3-out');
    }
  }
}
