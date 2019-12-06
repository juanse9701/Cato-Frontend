import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {
  @Input() cliente: any;
  constructor() { }

  ngOnInit() {
  }

}
