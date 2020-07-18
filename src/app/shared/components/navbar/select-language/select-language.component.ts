import { Component, OnInit, Input } from '@angular/core';
import { NabvarService } from '../nabvar.service';
import { take } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Languages } from 'src/app/core/interface/language.interface';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.css']
})
export class SelectLanguageComponent implements OnInit {
  @Input() sticky: boolean;
  @Input() menu: boolean;
  @Input() lang: string;

  languages: Languages;
  language: FormControl;

  constructor(private navbarService: NabvarService) { }

  ngOnInit() {
    this.getLanguages();
    this.getLanguage();
  }

  async getLanguages() {
    try {
      this.languages = await this.navbarService.getLanguages().toPromise();
    } catch (e) {
      console.log('error: ' + e);
    }
  }

  async getLanguage() {
    /* this.navbarService.language$.pipe(
      take(1)
    ).subscribe( lang => {
      this.language = new FormControl(lang || 'ES');
    }); */
    this.language = new FormControl(this.lang || 'ES');
  }


  setLanguage() {
    this.navbarService.changeLanguage(this.language.value);
  }
}
