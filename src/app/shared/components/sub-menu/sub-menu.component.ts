import { Component, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/core/interface/general_info.interface';

/**
 * Componente encargado de renderizar un submenu de navegación, este solo hace navegacion interna.
 */
@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements AfterViewInit {
  @Input() title: string;
  @Input() menuContent: Menu[];

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
  }

  ngAfterViewInit() {
    this.activateRoute.fragment.subscribe(fragment => {
      this.scrollToAnchor(fragment);
      this.router.navigate([], {fragment});
    });
  }

  /**
   * Método encargador de llevar al usuario al elemento dictado por el parametro location.
   *
   * @param location parametro que recibe como valor el slug del elemento
   * @param wait parametro que recibe el tiempo de espera para ejecutar la función, por defecto es cero(0)
   */
  scrollToAnchor(location: string, wait = 0): void {
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'nearest'});
      }, wait);
    }
  }
}
