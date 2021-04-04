import { Component, OnInit, Input } from '@angular/core';
/**
 * Componente exclusivo de la página principal, su principal objetivo es servir como baner inicial
 * y darle dinamismo a la pagina, cuenta con un juego de particulas que es configurado cuando va a inciar la carga de la página.
 */
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor() {}

  ngOnInit() {
    this.myStyle = {
      width: '100%',
      height: '100%'
    };

    this.myParams = {
      particles: {
        number: {
          value: 120
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle'
        },
        line_linked: {
          enable: true,
          distance: 100,
          color: '#ffffff',
          opacity: 0.7,
          width: 1
        },
        size: {
          value: 3
        },
        move: {
          speed: 2
        }
      }
    };
  }

}
