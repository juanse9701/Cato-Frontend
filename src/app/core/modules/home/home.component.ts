import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  home: any[];
  constructor(private title: Title, private pagesService: PagesService) {
    this.title.setTitle('Grupo CATO');
  }

  ngOnInit() {
    this.home = this.pagesService.getHome();
    this.getHome();
  }

  getHome() {
    this.pagesService.getPage('inicio', 'ES').subscribe();
  }
}
