import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Languages } from 'src/app/core/interface/language.interface';
import { QUERYLANGUAGES, QUERYINFOGENERAL } from 'src/app/core/graphql/Query';
import { map } from 'rxjs/operators';
import { GeneralInfo } from 'src/app/core/interface/general_info.interface';

/**
 * Servicio encargado manejar todo lo referente al menu de navegacion e idiomas, enviando información de los mismos a los
 * componentes que lo soliciten.
 */
@Injectable({
  providedIn: 'root'
})
export class NabvarService {

  private lang = new BehaviorSubject<string>(localStorage.getItem('lang') || 'ES');
  language$ = this.lang.asObservable();

  constructor(private apollo: Apollo) { }

  /**
   * @method changeLanguage
   *
   * @param lang parametro de tipo string que recibe el idioma seleccionado por el usuario
   *
   * Función encargada de actualizar el idioma para la aplicación, para esto usa el parametro lang que es la información
   * que el usuario envia y a su vez guarada dicha información en el almacenamiento local, por ultimo efectua una recarga
   * a la aplicaión.
   */
  changeLanguage(lang: string) {
    this.lang.next(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

  /**
   * @method getLanguages
   *
   * @description
   * Obtiene los idiomas que se enceuntren disponibles en la aplicacion, para esto hace uso de apollo que es una instancia
   * de Apollo, y el cual permite realizar consultas al backend usando graphql
   *
   * @return nuevo observable con la información de los idiomas
   */
  getLanguages(): Observable<Languages> {
    return this.apollo.query({
      query: QUERYLANGUAGES
    }).pipe(
      map( (response: any) => response.data.languages)
    );
  }

  /**
   * @method getInfoGeneral
   *
   * @description
   * Obtiene la información del header(menú de navegacion, logos) y el footer de la aplicación.
   *
   * @param lang lenguage en el cual es solicitada la información(opcional)
   *
   * @return nuevo observable con la información solicitada
   */
  getInfoGeneral(lang?: string): Observable<GeneralInfo> {
    return this.apollo.query({
      query: QUERYINFOGENERAL,
      variables: {
        lang
      }
    }).pipe(
      map( (response: any) => response.data.general_info)
    );
  }
}
