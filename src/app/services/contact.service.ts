import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { ContactPage, Contact } from '../core/interface/contact.interface';
import { map } from 'rxjs/operators';
import { QUERYCONTACT } from '../core/graphql/Query';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apollo: Apollo) { }

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
