import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  nosotros: any[];
  data = [
    { src: '', type: 'youtube' },
    { src: '', type: 'image' },
    { src: 'https://pannellum.org/images/alma.jpg', type: 'img360' }
  ];

  constructor(private pagesService: PagesService, private title: Title) {
    this.title.setTitle('Acerca de nosotros');
  }

  ngOnInit() {
    this.nosotros = this.pagesService.getNosotros();
  }
}
