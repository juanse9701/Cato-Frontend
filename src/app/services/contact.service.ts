import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Contact } from '../core/interface/contact.interface';
import { map } from 'rxjs/operators';
import { QUERYCONTACT } from '../core/graphql/Query';

/**
 * Servicio encargado de proveer información acerca de la pagina de contacto.
 */
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apollo: Apollo) { }

  /**
   * @method getContactPage
   * @param lang parametro de tipo estring que recibe el idioma en el cual se solicitara la información
   *
   * Método encargado de solicitar la información de la página de contacto
   *
   * @return devuelve un nuevo observable con la información de la pagina de contacto
   */
  getContactPage(lang: string = 'ES'): Observable<Contact> {
    return this.apollo.query<Contact>({
      query: QUERYCONTACT,
      variables: {
        lang
      }
    }).pipe(
      map( (data: any) => data.data.contact )
    );
  }
}
