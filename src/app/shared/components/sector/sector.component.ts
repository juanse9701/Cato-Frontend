import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  @Input() sector: string;
  clientes:any[] = [
    {
      img: 'assets/img/realityapp.png'
    },
    {
      img: 'assets/img/realityapp.png'
    },
    {
      img: 'assets/img/realityapp.png'
    },
    {
      img: 'assets/img/realityapp.png'
    },
    {
      img: 'assets/img/realityapp.png'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
