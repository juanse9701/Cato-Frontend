import { Component, OnInit, Input, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-section-with-collapsible-grid',
  templateUrl: './section-with-collapsible-grid.component.html',
  styleUrls: ['./section-with-collapsible-grid.component.css']
})
export class SectionWithCollapsibleGridComponent implements OnInit {
  @Input() data: any;
  @Input() type: string;

  buttonText: string = 'Ver más';
  showMore: boolean = true;

  @ViewChild('cards', { static: false }) cards: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

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
        this.renderer.setStyle(element, 'max-height', null);
      }, 210);
      this.buttonText = 'Ver menos';
    }
    console.log(element);
  }
}
