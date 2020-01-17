import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Renderer2,
  HostListener,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-section-with-collapsible-grid',
  templateUrl: './section-with-collapsible-grid.component.html',
  styleUrls: ['./section-with-collapsible-grid.component.css']
})
export class SectionWithCollapsibleGridComponent implements OnInit {
  @Input() data: any;

  buttonText: string = 'Ver más';
  showMore: boolean = true;
  lineas: number;

  @ViewChild('cards', { static: false }) cards: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.evaluateShowMore();
  }

  constructor(private renderer: Renderer2, private changeRef: ChangeDetectorRef) {}

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

  ngAfterViewChecked(): void {
    this.evaluateShowMore();
    this.changeRef.detectChanges();
  }

  seeMore(element) {
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

  /**
   * fsgdrga
   *
   */
  evaluateShowMore() {
    let _boxes = this.cards.nativeElement.children;
    let box1 = _boxes[0];
    let colCnt = Math.floor(this.cards.nativeElement.offsetWidth / box1.clientWidth); //Number of Column;
    let rowCnt = Math.ceil(_boxes.length / colCnt); //Number of Rows
    if (rowCnt <= this.lineas) {
      this.showMore = false;
    }
    if (rowCnt > this.lineas) {
      this.showMore = true;
    }
  }
}
