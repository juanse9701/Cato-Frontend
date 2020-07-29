import { Component, OnInit, Input } from '@angular/core';
import { NabvarService } from '../nabvar.service';
import { FormControl } from '@angular/forms';
import { Languages } from 'src/app/core/interface/language.interface';

/**
 * Componente encargado de renderizar el selector de idiomas.
 */
@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {
  @Input() sticky: boolean;
  @Input() menu: boolean;

  /** Variable que recibe el lenguage que es seleccionado por el usuario desde un componente padre */
  @Input() lang: string;

  languages: Languages;
  language: FormControl;

  constructor(private navbarService: NabvarService) { }

  ngOnInit() {
    this.getLanguages();
    this.getLanguage();
  }

  /**
   * @method getLanguages
   *
   * método asincrono encargado de obtener los distintos idiomas que se encuentran disponibles para la aplicación.
   */
  async getLanguages() {
    try {
      this.languages = await this.navbarService.getLanguages().toPromise();
    } catch (e) {
      console.log('error: ' + e);
    }
  }

  /**
   * @method getLanguages
   *
   * Método encargado de asignar un valor a la variable language el cual es un controlInput.
   */
  getLanguage() {
    this.language = new FormControl(this.lang || 'ES');
  }


  /**
   * @method setLanguages
   *
   * Método encargado de enviar al servicio {@link navbarService} el idioma seleccionado por el usuario,
   * este se invocado cada que el usario seleciona otro idioma.
   */
  setLanguage() {
    this.navbarService.changeLanguage(this.language.value);
  }
}
