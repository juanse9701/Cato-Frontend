import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Languages } from 'src/app/core/interface/language.interface';
import { QUERYLANGUAGES } from 'src/app/core/graphql/Query';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NabvarService {

  private lang = new BehaviorSubject<string>(localStorage.getItem('lang') || 'ES');
  language$ = this.lang.asObservable();

  constructor(private apollo: Apollo) { }

  changeLanguage(lang: string) {
    this.lang.next(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }

  getLanguages(): Observable<Languages> {
    return this.apollo.query({
      query: QUERYLANGUAGES
    }).pipe(
      map( (response: any) => response.data.languages)
    );
  }
}
