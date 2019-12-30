import { Component, OnInit } from '@angular/core';
import { getLocaleEraNames } from '@angular/common';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  nosotros: any[];

  constructor(private pagesService: PagesService) {}

  ngOnInit() {
    this.nosotros = this.pagesService.getNosotros();
  }
}
