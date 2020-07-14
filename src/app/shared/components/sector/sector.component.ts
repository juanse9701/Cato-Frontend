import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Post } from 'src/app/core/interface/page.interface';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  @Input() sector: Post;
  buttonText = 'Ver más';
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  seeMore(element) {
    if (element.style.maxHeight) {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 20 + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', null);
      }, 20);
      this.buttonText = 'Ver más';
    } else {
      this.renderer.setStyle(element, 'max-height', element.scrollHeight + 20 + 'px');
      setTimeout(() => {
        this.renderer.setStyle(element, 'max-height', 'initial');
      }, 210);
      this.buttonText = 'Ver menos';
    }
  }
}
