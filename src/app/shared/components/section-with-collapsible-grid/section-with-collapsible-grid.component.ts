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

  @ViewChild('cards', { static: false }) cards: ElementRef;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.evaluateShowMore();
  }

  constructor(private renderer: Renderer2, private changeRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

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

  evaluateShowMore() {
    let _boxes = this.cards.nativeElement.children;
    let box1 = _boxes[0];
    var colCnt = Math.floor(this.cards.nativeElement.offsetWidth / box1.clientWidth); //Number of Column;
    var rowCnt = Math.ceil(_boxes.length / colCnt); //Number of Rows
    if (rowCnt === 1) {
      this.showMore = false;
    }
    if (rowCnt > 1) {
      this.showMore = true;
    }
  }
}
