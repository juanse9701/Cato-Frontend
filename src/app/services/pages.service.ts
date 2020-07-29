import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { QUERYGENERAL } from '../core/graphql/Query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from '../core/interface/page.interface';

/**
 * Servicio encargado de proveer información de las páginas que le sean solicitadas por los distintos componentes.
 */
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private apollo: Apollo) {}

  /**
   * @method getPage
   * @param slug paramero de tipo string que sirve como identificador de la página
   * @param lang parametro de tipo estring que recibe el idioma en el cual se solicitara la información
   *
   * Método encargado de solicitar la información de una página en un idioma.
   *
   * @return Un nuevo observable con la información de la página en el idioma solicitado.
   */
  getPage(slug: string, lang: string = 'ES'): Observable<Page> {
    return this.apollo.query({
      query: QUERYGENERAL,
      variables: {
        slug,
        lang
      }
    }).pipe(
      map( (response: any) => response.data.page)
    );
  }

}
