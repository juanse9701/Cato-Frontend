import { Component, OnInit } from '@angular/core';
import { NabvarService } from './shared/components/navbar/nabvar.service';
import { Observable } from 'rxjs';
import { GeneralInfo } from './core/interface/general_info.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ejercicio-uno';
  lang$: Observable<string>;
  infoGeneral: GeneralInfo;

  constructor(private navbarService: NabvarService) {
    this.lang$ = this.navbarService.language$;
  }

  ngOnInit() {
    this.getInfoGeneral();
  }

  async getInfoGeneral() {
    try {
      this.infoGeneral = await this.navbarService.getInfoGeneral().toPromise();
    } catch (e) {
      console.log('Error: ' + e);
    }
  }

}
