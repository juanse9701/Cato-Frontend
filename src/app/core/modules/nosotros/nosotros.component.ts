import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { Title } from '@angular/platform-browser';
import { Page } from '../../interface/page.interface';
import { NabvarService } from 'src/app/shared/components/navbar/nabvar.service';
import { take } from 'rxjs/operators';

/**
 * Componente encargado de renderizar la página de Nosotros, este tipo de componente
 * es considerado módulo ya que actua como ruta principal.
 */
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  nosotros: any[];
  page: Page;

  /* data = [
    { src: '', type: 'youtube' },
    { src: '', type: 'image' },
    { src: 'https://pannellum.org/images/alma.jpg', type: 'img360' }
  ]; */

  language: string;

  constructor(private pagesService: PagesService, private title: Title, private navbarService: NabvarService) {
    this.title.setTitle('Acerca de nosotros');
    this.navbarService.language$.pipe(take(1)).subscribe( lang => this.language = lang);
  }

  ngOnInit() {
    this.getPage();
  }

  /**
   * Método asincorono encargado de obtener la información de la página y asignarlo a la variable [page]{@link #page},
   * este se ejecuta una vez la página ha iniciado la carga.
   */
  async getPage() {
    this.page = await this.pagesService.getPage('nosotros', this.language).toPromise();
  }
}
