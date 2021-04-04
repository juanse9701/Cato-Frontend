import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesService } from 'src/app/services/pages.service';
import { Page } from 'src/app/core/interface/page.interface';
import { NabvarService } from 'src/app/shared/components/navbar/nabvar.service';
import { take } from 'rxjs/operators';

/**
 * Componente encargado de renderizar las página que haga match con la ruta www.dominio.com/home (página principal), este tipo de componente
 * es considerado módulo ya que actua como ruta principal.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Home: Page;
  language: string;

  constructor(private title: Title, private pagesService: PagesService, private navbarService: NabvarService) {
    this.title.setTitle('Grupo CATO');
    this.navbarService.language$.pipe(take(1)).subscribe( lang => this.language = lang);
  }

  ngOnInit() {
    this.getHome();
  }

  /**
   * Método asincorono encargado de obtener la información de la página de inicio y asignarlo a la variable [Home]{@link #Home},
   * este se ejecuta una vez la página ha iniciado la carga.
   */
  async getHome() {
    try {
      this.Home = await this.pagesService.getPage('inicio', this.language).toPromise();
    } catch (e) {
      console.log('error: ' + e);
    }
  }
}
