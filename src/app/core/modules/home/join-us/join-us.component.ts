import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent implements OnInit {
  // @Input() data: any;

  data = {
    title: 'Colabora con nosotros',
    subtitle: 'Juntos podemos crecer',
    description: 'En Grupo CATO estamos buscando los siguientes perfiles',
    roles: [
      {
        title: 'Desarollo de sosftware'
      },
      {
        title: 'Producción multimedia'
      },
      {
        title: 'Equipos interdisciplinarios'
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
