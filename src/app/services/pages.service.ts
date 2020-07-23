import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { QUERYGENERAL } from '../core/graphql/Query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from '../core/interface/page.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private apollo: Apollo) {}

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
