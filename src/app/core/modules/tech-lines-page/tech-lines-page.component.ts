import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagina } from 'src/app/shared/components/page-layout/page-layout.component';
import { Title } from '@angular/platform-browser';
import { Page } from '../../interface/page.interface';
import { NabvarService } from 'src/app/shared/components/navbar/nabvar.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tech-lines-page',
  templateUrl: './tech-lines-page.component.html',
  styleUrls: ['./tech-lines-page.component.css']
})
export class TechLinesPageComponent implements OnInit {
  pageContent: Pagina;
  page: Page;
  language: string;

  constructor(
    private pagesService: PagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    private navbarService: NabvarService
  ) {
    this.navbarService.language$.pipe(take(1)).subscribe((language: string) => this.language = language );
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pageContent = this.pagesService.getTechLine(params.techLine);
      this.getPage(params.techLine, this.language);
      if (!this.pageContent) {
        this.router.navigate(['']);
      }
      this.title.setTitle(this.pageContent.title);
    });
  }

  async getPage(techline: string, language: string) {
    this.page = await this.pagesService.getPage(techline, language).toPromise();
  }
}
