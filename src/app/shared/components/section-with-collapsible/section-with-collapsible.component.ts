import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Section, Post } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-section-with-collapsible',
  templateUrl: './section-with-collapsible.component.html',
  styleUrls: ['./section-with-collapsible.component.css']
})
export class SectionWithCollapsibleComponent implements OnInit {
  @Input() section: Section;
  extraposts: Post[];
  actualData: Post;
  actualDataIndex: number;
  show: boolean[] = [];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.extraposts = this.section.posts && this.section.posts[0].extraposts;
    this.actualData = this.extraposts && this.extraposts[0];
    for (const i in this.extraposts) {
      this.show.push(false);
    }
  }

  seeMore(element, index) {
    this.changeShowActual(index);
    if (this.show[index]) {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', 'initial');
      }, 210);
    } else {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', null);
      }, 20);
    }
  }
  changeShowActual(index) {
    for (let i = 0; i < this.show.length; i++) {
      if (i === index) {
        this.show[i] = !this.show[i];
      } else {
        this.show[i] = false;
      }
    }
    this.actualData = this.extraposts[index];
    this.actualDataIndex = index;
  }
  anyUnfolded(): boolean {
    for (const i in this.show) {
      if (this.show[i]) {
        return true;
      }
    }
    return false;
  }
  changeActualData(index) {
    this.actualData = this.extraposts[index];
  }
}

