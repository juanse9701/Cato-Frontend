import { Component, OnInit } from '@angular/core';
import { Page } from '../../interface/page.interface';
import { PagesService } from 'src/app/services/pages.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NabvarService } from 'src/app/shared/components/navbar/nabvar.service';
import { take } from 'rxjs/operators';
/**
 * Componente encargado de renderizar las páginas que hagan match con la ruta www.dominio.com/cato/:nombre_page, este tipo de componentes
 * son considerados módulos ya que actuan como rutas principales.
 */
@Component({
  selector: 'app-cato',
  templateUrl: './cato.component.html',
  styleUrls: ['./cato.component.css']
})
export class CatoComponent implements OnInit {

  page: Page;
  language: string;

  constructor(private router: Router,
              private pagesService: PagesService,
              private title: Title,
              private activatedRoute: ActivatedRoute,
              private navbarService: NabvarService) {
                this.navbarService.language$.pipe(take(1)).subscribe((language: string) => this.language = language );
              }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.getPage(params.pages, this.language);
    });
  }

  /**
   * Método asincorono encargado de obtener la informacion en un idioma especifico, para esto hace uso de page y language, ademas se
   * combina con el servicio [PageService]{@link PageService}.
   *
   * @param page parametro que recibe el nombre de la página de la cual se pedirá la información.
   * @param language parametro que recibe el idioma en el que se va a solicitar la información.
   */
  async getPage(page: string, language: string) {
    this.page = await this.pagesService.getPage(page, language).toPromise();
    if (!this.page) {
      this.router.navigate(['']);
    }
    this.title.setTitle(this.page.title); // actualiza el nombre en la pestaña del navegador
  }
}
