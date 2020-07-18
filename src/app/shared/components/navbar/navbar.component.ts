import { Component, OnInit, HostListener, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { NabvarService } from './nabvar.service';
import { FormControl } from '@angular/forms';
import { Languages } from 'src/app/core/interface/language.interface';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tipo: string;
  open = false;
  sticky: boolean;
  languages: Languages;
  language: FormControl;
  menus = [
    {
      name: 'Inicio',
      url: 'inicio'
    },
    {
      name: 'Nosotros',
      url: 'nosotros'
    },
    {
      name: 'Innovación',
      url: 'innovacion'
    },
    {
      name: 'Software',
      url: 'software'
    },
    {
      name: 'Hardware',
      url: 'hardware'
    },
    {
      name: 'Proyectos',
      url: 'proyectos'
    },
    {
      name: 'Formación',
      url: 'formacion'
    },
    {
      name: 'Contacto',
      url: 'contacto',
      children: [
        {
          name: 'Desarrollo de software'
        },
        {
          name: 'Producción de multimedia'
        }
      ]
    }
  ];
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
    private navbarService: NabvarService
  ) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      console.log(this.location.path());
      if (this.location.path() === '') {
        this.tipo = 'home';
      } else if (this.location.path() === '/contacto') {
        this.tipo = 'contacto';
      } else {
        this.tipo = '';
      }
    });
  }

  ngOnInit() {
    this.getLanguages();
    this.getLanguage();
  }
 /*  isActive(instruction: any[]): boolean {
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
  } */

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

  async getLanguages() {
    try {
      this.languages = await this.navbarService.getLanguages().toPromise();
    } catch (e) {
      console.log('error: ' + e);
    }
  }

  async getLanguage() {
    this.navbarService.language$.pipe(
      take(1)
    ).subscribe( lang => {
      this.language = new FormControl(lang || 'ES');
    });
  }


  setLanguage() {
    this.navbarService.changeLanguage(this.language.value);
  }
}
