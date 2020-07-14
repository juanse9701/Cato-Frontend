import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesService } from 'src/app/services/pages.service';
import { Page } from '../../interface/page.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: any[];
  Home: Page;
  constructor(private title: Title, private pagesService: PagesService) {
    this.title.setTitle('Grupo CATO');
  }

  ngOnInit() {
    this.home = this.pagesService.getHome();
    this.getHome();
  }

  async getHome() {
    try {
      this.Home = await this.pagesService.getPage('inicio', 'ES').toPromise();
      console.log(this.Home);
    } catch (e) {
      console.log('error: ' + e);
    }
  }
}
