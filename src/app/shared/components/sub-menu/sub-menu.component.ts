import { Component, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from 'src/app/core/interface/general_info.interface';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.css']
})
export class SubMenuComponent implements AfterViewInit {
  @Input() title: string;
  @Input() menuContent: Menu[];

  constructor(private activateRoute: ActivatedRoute, private router: Router) {
  }

  ngAfterViewInit() {
    this.activateRoute.fragment.subscribe(fragment => {
      this.scrollToAnchor(fragment);
      this.router.navigate([], {fragment});
    });
  }


  scrollToAnchor(location: string, wait = 0): void {
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'nearest'});
      }, wait);
    }
  }
}
