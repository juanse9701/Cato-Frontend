import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientes: any = {
    componentName: 'section-with-multiple-subsection',
    title: 'Clientes',
    description: 'Organizaciones que confiaron en Grupo CATO para potenciar su creciemiento a nivel tecnológico.',
    items: [
      {
        nombre: 'sector privador',
        clientes: [
          {
            img: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            img: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            img: 'assets/img/llanocentro.png',
            title: 'Llanocentro'
          },
          {
            img: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            img: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            img: 'assets/img/llanocentro.png',
            title: 'Llanocentro'
          }
        ]
      },
      {
        nombre: 'sector público',
        clientes: [
          {
            img: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            img: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            img: 'assets/img/llanocentro.png',
            title: 'Llanocentro'
          },
          {
            img: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            img: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            img: 'assets/img/llanocentro.png',
            title: 'Llanocentro'
          }
        ]
      },
      {
        nombre: "ong's",
        clientes: [
          {
            img: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            img: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            img: 'assets/img/llanocentro.png',
            title: 'Llanocentro'
          },
          {
            img: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            img: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            img: 'assets/img/realityapp.png',
            title: 'Llanocentro'
          }
        ]
      }
    ]
  };
  casosDeExito: any = {
    componentName: 'section-with-carousel2',
    title: 'Casos de exito',
    description: 'Empresas que confiaron en Grupo CATO para potenciar su creciemiento nivel tecnológico.',
    items: [
      {
        title: 'Implementación total de vive digital 2015',
        description: 'Departamento del Vichada',
        img: 'assets/img/vivedigitalvichada.png'
      },
      {
        title: 'Implementación total de vive digital 2015',
        description: 'Departamento del Vichada',
        img: 'assets/img/vivedigitalvichada.png'
      },
      {
        title: 'Implementación total de vive digital 2015',
        description: 'Departamento del Vichada',
        img: 'assets/img/vivedigitalvichada.png'
      },
      {
        title: 'Implementación total de vive digital 2015',
        description: 'Departamento del Vichada',
        img: 'assets/img/vivedigitalvichada.png'
      },
      {
        title: 'Implementación total de vive digital 2015',
        description: 'Departamento del Guainia',
        img: 'assets/img/vivedigitalvichada.png'
      },
      {
        title: 'Implementación total de vive digital 2015',
        description: 'Departamento del Meta',
        img: 'assets/img/vivedigitalvichada.png'
      },
      {
        title: 'Implementación total de vive digital 2015',
        description: 'Departamento del Cundinamarca',
        img: 'assets/img/vivedigitalvichada.png'
      },
      {
        title: 'Implementación total de vive digital 2015',
        description: 'Departamento del Atlantico',
        img: 'assets/img/vivedigitalvichada.png'
      }
    ]
  };
  lineasTecnologicas: any = {
    componentName: 'section-with-scroll',
    title: 'Lineas Tecnológicas',
    description: '',
    items: [
      {
        title: 'Innovaciones y aplicaciones',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore pariatur aliquid incidunt quo. Assumenda sequi voluptatem id. Incidunt, blanditiis architecto at doloribus id quasi ipsum, ipsam ducimus inventore, obcaecati tempore?',
        img: 'assets/img/innovacion.png'
      },
      {
        title: 'Fábrica de software',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore pariatur aliquid incidunt quo. Assumenda sequi voluptatem id. Incidunt, blanditiis architecto at doloribus id quasi ipsum, ipsam ducimus inventore, obcaecati tempore?',
        img: 'assets/img/pc.png'
      },
      {
        title: 'Distribución de hardware',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore pariatur aliquid incidunt quo. Assumenda sequi voluptatem id. Incidunt, blanditiis architecto at doloribus id quasi ipsum, ipsam ducimus inventore, obcaecati tempore?',
        img: 'assets/img/hardware.png'
      },
      {
        title: 'Gestión de proyectos',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore pariatur aliquid incidunt quo. Assumenda sequi voluptatem id. Incidunt, blanditiis architecto at doloribus id quasi ipsum, ipsam ducimus inventore, obcaecati tempore?',
        img: 'assets/img/gestion.png'
      }
    ]
  };
  desarrollosDeAutoria: any = {
    componentName: 'section-simple',
    title: 'Desarrollos de autoria',
    description: 'Estos son proyectos desarrollados por Grupo CATO que te invitamos a conocer',
    items: [
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        img: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        img: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        img: 'assets/img/realityapp.png'
      }
    ]
  };
  capacidades: any = {
    componentName: 'section-with-carousel1',
    title: 'Perfil de capacidades',
    description: '',
    items: [
      {
        img: 'assets/img/goggles.png',
        description: 'Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca.'
      },
      {
        img: 'assets/img/goggles.png',
        description: 'Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca.'
      },
      {
        img: 'assets/img/goggles.png',
        description: 'Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca.'
      },
      {
        img: 'assets/img/goggles.png',
        description: 'Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca.'
      },
      {
        img: 'assets/img/goggles.png',
        description: 'Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca.'
      },
      {
        img: 'assets/img/goggles.png',
        description: 'Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca.'
      },
      {
        img: 'assets/img/goggles.png',
        description: 'Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca.'
      }
    ]
  };

  home: any[] = [
    this.lineasTecnologicas,
    this.casosDeExito,
    this.capacidades,
    this.clientes,
    this.desarrollosDeAutoria
  ];
  constructor() {}

  ngOnInit() {}
}
