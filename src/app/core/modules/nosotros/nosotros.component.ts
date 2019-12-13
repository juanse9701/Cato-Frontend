import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
  clientes: any[] = [
    {
      nombre: 'sector privador',
      clientes: [
        {
          img: 'assets/img/unicentro.png',
          nombre: 'Unicentro'
        },
        {
          img: 'assets/img/congente.png',
          nombre: 'Congente'
        },
        {
          img: 'assets/img/llanocentro.png',
          nombre: 'Llanocentro'
        },
        {
          img: 'assets/img/unicentro.png',
          nombre: 'Unicentro'
        },
        {
          img: 'assets/img/congente.png',
          nombre: 'Congente'
        },
        {
          img: 'assets/img/llanocentro.png',
          nombre: 'Llanocentro'
        }
      ]
    },
    {
      nombre: 'sector público',
      clientes: [
        {
          img: 'assets/img/unicentro.png',
          nombre: 'Unicentro'
        },
        {
          img: 'assets/img/congente.png',
          nombre: 'Congente'
        },
        {
          img: 'assets/img/llanocentro.png',
          nombre: 'Llanocentro'
        },
        {
          img: 'assets/img/unicentro.png',
          nombre: 'Unicentro'
        },
        {
          img: 'assets/img/congente.png',
          nombre: 'Congente'
        },
        {
          img: 'assets/img/llanocentro.png',
          nombre: 'Llanocentro'
        }
      ]
    },
    {
      nombre: "ong's",
      clientes: [
        {
          img: 'assets/img/unicentro.png',
          nombre: 'Unicentro'
        },
        {
          img: 'assets/img/congente.png',
          nombre: 'Congente'
        },
        {
          img: 'assets/img/llanocentro.png',
          nombre: 'Llanocentro'
        },
        {
          img: 'assets/img/unicentro.png',
          nombre: 'Unicentro'
        },
        {
          img: 'assets/img/congente.png',
          nombre: 'Congente'
        },
        {
          img: 'assets/img/realityapp.png',
          nombre: 'Llanocentro'
        }
      ]
    }
  ];
  desarrollosDeAutoria: any[] = [
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    }
  ];
  desarrollosTecnologicos: any[] = [
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    },
    {
      description: 'Gestor de realidad virtual y aumentada',
      client: 'Departamento de Cundinamarca',
      img: 'assets/img/realityapp.png'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
