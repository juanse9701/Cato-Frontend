import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NabvarService {

  private lang = new BehaviorSubject<string>(localStorage.getItem('lang') || 'ES');
  language$ = this.lang.asObservable();

  constructor() { }

  changeLanguage(lang: string) {
    this.lang.next(lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
