import { Component, OnInit, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-section-with-collapsible',
  templateUrl: './section-with-collapsible.component.html',
  styleUrls: ['./section-with-collapsible.component.css']
})
export class SectionWithCollapsibleComponent implements OnInit {
  @Input() section: Section;
  actualData: any;
  show: boolean[] = [];

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.actualData = this.section.data[0];
    for (const i in this.section.data) {
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
    this.actualData = this.section.data[index];
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
    this.actualData = this.section.data[index];
  }
}

export interface Section {
  title: string;
  id: string;
  subtitle: string;
  content: string;
  img: string;
  buttons: Button[];
  data: Object[];
}

export interface Button {
  estilo: number;
  contenido: string;
  color: string;
  background: string;
  img?: string;
  imgIcono?: any;
  imgCheck?: any;
}
