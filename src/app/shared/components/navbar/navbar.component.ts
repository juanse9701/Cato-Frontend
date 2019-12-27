import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tipo: string;
  open: boolean = false;
  sticky: boolean;

  @ViewChild('header', { static: false }) header: ElementRef;
  @ViewChild('line1', { static: false }) line1: ElementRef;
  @ViewChild('line2', { static: false }) line2: ElementRef;
  @ViewChild('line3', { static: false }) line3: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 1) {
      this.renderer.addClass(this.header.nativeElement, 'sticky');
      this.sticky = true;
    } else {
      this.renderer.removeClass(this.header.nativeElement, 'sticky');
      this.sticky = false;
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
  isActive(instruction: any[]): boolean {
    // Set the second parameter to true if you want to require an exact match.
    return this.router.isActive(this.router.createUrlTree(instruction), false);
  }
  navigate(url) {
    this.router.navigate(['/', url]);
    this.open = false;
    this.renderer.removeClass(this.line1.nativeElement, 'menu-button-line1');
    this.renderer.removeClass(this.line2.nativeElement, 'menu-button-line2');
    this.renderer.removeClass(this.line3.nativeElement, 'menu-button-line3');
    this.renderer.addClass(this.line1.nativeElement, 'menu-button-line1-out');
    this.renderer.addClass(this.line2.nativeElement, 'menu-button-line2-out');
    this.renderer.addClass(this.line3.nativeElement, 'menu-button-line3-out');
  }

  openMenu() {
    this.open = !this.open;
    if (this.open) {
      this.renderer.removeClass(this.line1.nativeElement, 'menu-button-line1-out');
      this.renderer.removeClass(this.line2.nativeElement, 'menu-button-line2-out');
      this.renderer.removeClass(this.line3.nativeElement, 'menu-button-line3-out');
      this.renderer.addClass(this.line1.nativeElement, 'menu-button-line1');
      this.renderer.addClass(this.line2.nativeElement, 'menu-button-line2');
      this.renderer.addClass(this.line3.nativeElement, 'menu-button-line3');
    } else {
      this.renderer.removeClass(this.line1.nativeElement, 'menu-button-line1');
      this.renderer.removeClass(this.line2.nativeElement, 'menu-button-line2');
      this.renderer.removeClass(this.line3.nativeElement, 'menu-button-line3');
      this.renderer.addClass(this.line1.nativeElement, 'menu-button-line1-out');
      this.renderer.addClass(this.line2.nativeElement, 'menu-button-line2-out');
      this.renderer.addClass(this.line3.nativeElement, 'menu-button-line3-out');
    }
  }
}
