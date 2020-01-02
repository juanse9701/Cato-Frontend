import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagina } from 'src/app/shared/components/page-layout/page-layout.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tech-lines-page',
  templateUrl: './tech-lines-page.component.html',
  styleUrls: ['./tech-lines-page.component.css']
})
export class TechLinesPageComponent implements OnInit {
  pageContent: Pagina;

  constructor(
    private pagesService: PagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pageContent = this.pagesService.getTechLine(params.techLine);
      if (!this.pageContent) {
        this.router.navigate(['']);
      }
      this.title.setTitle(this.pageContent.title);
    });
  }
}
