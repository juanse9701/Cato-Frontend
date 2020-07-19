import { Component, OnInit } from '@angular/core';
import { NabvarService } from './shared/components/navbar/nabvar.service';
import { GeneralInfo } from './core/interface/general_info.interface';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ejercicio-uno';
  lang: string;
  infoGeneral: GeneralInfo;

  constructor(private navbarService: NabvarService) {
    this.navbarService.language$.pipe(take(1)).subscribe( lang => this.lang = lang);
  }

  ngOnInit() {
    this.getInfoGeneral();
  }

  async getInfoGeneral() {
    try {
      this.infoGeneral = await this.navbarService.getInfoGeneral(this.lang).toPromise();
    } catch (e) {
      console.log('Error: ' + e);
    }
  }

}
