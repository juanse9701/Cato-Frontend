import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Page } from 'src/app/core/interface/page.interface';
import { NabvarService } from 'src/app/shared/components/navbar/nabvar.service';
import { take } from 'rxjs/operators';

/**
 * Componente encargado de renderizar las páginas que hagan match con la ruta www.dominio.com/:nombre_page, este tipo de componentes
 * son considerados módulos ya que actuan como rutas principales.
 */

@Component({
  selector: 'app-tech-lines-page',
  templateUrl: './tech-lines-page.component.html',
  styleUrls: ['./tech-lines-page.component.css']
})
export class TechLinesPageComponent implements OnInit {
  page: Page;
  language: string;

  constructor(
    private pagesService: PagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    private navbarService: NabvarService
  ) {
    this.navbarService.language$.pipe(take(1)).subscribe((language: string) => this.language = language );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getPage(params.techLine, this.language);
    });
  }

  /**
   * Método asincorono encargado de obtener la informacion en un idioma especifico, para esto hace uso de techline y language, ademas se
   * combina con el servicio [PageService]{@link PageService}.
   *
   * @param techline parametro que recibe el nombre de la página de la cual se pedirá la información.
   * @param language parametro que recibe el idioma en el que se va a solicitar la información.
   */
  async getPage(techline: string, language: string) {
    this.page = await this.pagesService.getPage(techline, language).toPromise();
    if (!this.page) {
      this.router.navigate(['']);
    }
    this.title.setTitle(this.page.title);
  }
}
