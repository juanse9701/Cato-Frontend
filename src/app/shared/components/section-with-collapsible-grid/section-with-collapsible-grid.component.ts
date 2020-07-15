import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Renderer2,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-section-with-collapsible-grid',
  templateUrl: './section-with-collapsible-grid.component.html',
  styleUrls: ['./section-with-collapsible-grid.component.css']
})
export class SectionWithCollapsibleGridComponent implements OnInit {
  @Input() data: any;

  buttonText = 'Ver más';
  showMore = true;
  lineas: number;

  @ViewChild('cards', { static: false }) cards: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.evaluateShowMore();
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    switch (this.data.type) {
      case 'simple':
        this.lineas = 1;
        break;
      case 'doble':
        this.lineas = 2;
        break;
      default:
        this.lineas = 1;
        break;
    }
  }

  seeMore(element: any) {
    if (element.style.maxHeight) {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', null);
      }, 20);
      this.buttonText = 'Ver más';
    } else {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', 'initial');
      }, 210);
      this.buttonText = 'Ver menos';
    }
  }

  evaluateShowMore() {
    if (this.cards) {
      const boxes = this.cards.nativeElement.children;
      const box1 = boxes[0];
      const colCnt = Math.floor(this.cards.nativeElement.offsetWidth / box1.clientWidth); // Number of Column;
      const rowCnt = Math.ceil(boxes.length / colCnt); // Number of Rows
      if (rowCnt <= this.lineas) {
        this.showMore = false;
      }
      if (rowCnt > this.lineas) {
        this.showMore = true;
      }
    }
  }
}
