import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Renderer2,
  AfterContentInit,
  AfterViewInit
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

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.cards.nativeElement);
      let _boxes = this.cards.nativeElement.children;
      let box1 = _boxes[0];
      var colCnt = Math.floor(this.cards.nativeElement.offsetWidth / box1.clientWidth); //Number of Column;
      var rowCnt = Math.ceil(_boxes.length / colCnt); //Number of Rows
      console.log('Contador de filas', rowCnt);
      if (rowCnt === 1) {
        this.showMore = false;
        console.log('entró');
      }
    }, 2);
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
    console.log(element);
  }
}
