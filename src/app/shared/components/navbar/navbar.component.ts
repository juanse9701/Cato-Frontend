import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Menu } from 'src/app/core/interface/general_info.interface';

/**
 * Componente encargado de renderizar el menú de navegación de la página.
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  /** Variable de tipo string que definira estilos para el menú de navegacion segun la ruta en la que se encuentre el usuario */
  tipo: string;

  /** Variable boolean que define el estado inicial para la variable open, encargada de definir el comporamiento del menú
   * de navegación cuando la app se encuentre en dispositivos con tamaños de menores a 768px de pantalla
   *
   * @example
   *  (open = true): abre el menu de navegación.
   *
   *  (opem = false): Cierra el menu de navegación.
   */
  open = false;

  /** Variable que guarada un estado (true:false) para agregar una clase css */
  sticky: boolean;

  @Input() lang: string;

  /** Variable que recibe los items del menu de navegación */
  @Input() menus: Menu[];

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

  constructor(
    private router: Router,
    private location: Location,
    private renderer: Renderer2,
  ) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      if (this.location.path() === '') {
        this.tipo = 'home';
      } else if (this.location.path() === '/contacto') {
        this.tipo = 'contacto';
      } else {
        this.tipo = '';
      }
    });
  }

  /** @ignore */
  ngOnInit() {
  }

  /**
   * @method openMenu()
   *
   * método que es invocado a traves de un evento clic desde el template, su función
   * es actualizar el estado de la variable open quien efectua cambios sobre el menú de navegacion (abrir:cerrar) y
   * afecta las clases de distintos elementos que son capturados a traves del @ViewChild.
   */
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
