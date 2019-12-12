import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  clientes: any[] = [
    {
      nombre: "sector privador",
      clientes: [
        {
          img: "assets/img/unicentro.png",
          nombre: "Unicentro"
        },
        {
          img: "assets/img/congente.png",
          nombre: "Congente"
        },
        {
          img: "assets/img/llanocentro.png",
          nombre: "Llanocentro"
        },
        {
          img: "assets/img/unicentro.png",
          nombre: "Unicentro"
        },
        {
          img: "assets/img/congente.png",
          nombre: "Congente"
        },
        {
          img: "assets/img/llanocentro.png",
          nombre: "Llanocentro"
        }
      ]
    },
    {
      nombre: "sector público",
      clientes: [
        {
          img: "assets/img/unicentro.png",
          nombre: "Unicentro"
        },
        {
          img: "assets/img/congente.png",
          nombre: "Congente"
        },
        {
          img: "assets/img/llanocentro.png",
          nombre: "Llanocentro"
        },
        {
          img: "assets/img/unicentro.png",
          nombre: "Unicentro"
        },
        {
          img: "assets/img/congente.png",
          nombre: "Congente"
        },
        {
          img: "assets/img/llanocentro.png",
          nombre: "Llanocentro"
        }
      ]
    },
    {
      nombre: "ong's",
      clientes: [
        {
          img: "assets/img/unicentro.png",
          nombre: "Unicentro"
        },
        {
          img: "assets/img/congente.png",
          nombre: "Congente"
        },
        {
          img: "assets/img/llanocentro.png",
          nombre: "Llanocentro"
        },
        {
          img: "assets/img/unicentro.png",
          nombre: "Unicentro"
        },
        {
          img: "assets/img/congente.png",
          nombre: "Congente"
        },
        {
          img: "assets/img/realityapp.png",
          nombre: "Llanocentro"
        }
      ]
    }
  ];
  casosDeExito: any[] = [
    {
      titulo: "Implementación total de vive digital 2015",
      descripcion: "Departamento del Vichada",
      imagen: "assets/img/vivedigitalvichada.png"
    },
    {
      titulo: "Implementación total de vive digital 2015",
      descripcion: "Departamento del Vichada",
      imagen: "assets/img/vivedigitalvichada.png"
    },
    {
      titulo: "Implementación total de vive digital 2015",
      descripcion: "Departamento del Vichada",
      imagen: "assets/img/vivedigitalvichada.png"
    },
    {
      titulo: "Implementación total de vive digital 2015",
      descripcion: "Departamento del Vichada",
      imagen: "assets/img/vivedigitalvichada.png"
    },
    {
      titulo: "Implementación total de vive digital 2015",
      descripcion: "Departamento del Guainia",
      imagen: "assets/img/vivedigitalvichada.png"
    },
    {
      titulo: "Implementación total de vive digital 2015",
      descripcion: "Departamento del Meta",
      imagen: "assets/img/vivedigitalvichada.png"
    },
    {
      titulo: "Implementación total de vive digital 2015",
      descripcion: "Departamento del Cundinamarca",
      imagen: "assets/img/vivedigitalvichada.png"
    },
    {
      titulo: "Implementación total de vive digital 2015",
      descripcion: "Departamento del Atlantico",
      imagen: "assets/img/vivedigitalvichada.png"
    }
  ];
  lineasTecnologicas: any[] = [
    {
      nombre: "Innovaciones y aplicaciones",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore pariatur aliquid incidunt quo. Assumenda sequi voluptatem id. Incidunt, blanditiis architecto at doloribus id quasi ipsum, ipsam ducimus inventore, obcaecati tempore?",
      imagen: "assets/img/innovacion.png"
    },
    {
      nombre: "Fábrica de software",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore pariatur aliquid incidunt quo. Assumenda sequi voluptatem id. Incidunt, blanditiis architecto at doloribus id quasi ipsum, ipsam ducimus inventore, obcaecati tempore?",
      imagen: "assets/img/pc.png"
    },
    {
      nombre: "Distribución de hardware",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore pariatur aliquid incidunt quo. Assumenda sequi voluptatem id. Incidunt, blanditiis architecto at doloribus id quasi ipsum, ipsam ducimus inventore, obcaecati tempore?",
      imagen: "assets/img/hardware.png"
    },
    {
      nombre: "Gestión de proyectos",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore pariatur aliquid incidunt quo. Assumenda sequi voluptatem id. Incidunt, blanditiis architecto at doloribus id quasi ipsum, ipsam ducimus inventore, obcaecati tempore?",
      imagen: "assets/img/gestion.png"
    }
  ];
  desarrollosDeAutoria: any[] = [
    {
      description: "Gestor de realidad virtual y aumentada",
      client: "Departamento de Cundinamarca",
      img: "assets/img/realityapp.png"
    },
    {
      description: "Gestor de realidad virtual y aumentada",
      client: "Departamento de Cundinamarca",
      img: "assets/img/realityapp.png"
    },
    {
      description: "Gestor de realidad virtual y aumentada",
      client: "Departamento de Cundinamarca",
      img: "assets/img/realityapp.png"
    }
  ];

  capacidades: any[] = [
    {
      imagen: "assets/img/goggles.png",
      descripcion:
        "Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca."
    },
    {
      imagen: "assets/img/goggles.png",
      descripcion:
        "Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca."
    },
    {
      imagen: "assets/img/goggles.png",
      descripcion:
        "Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca."
    },
    {
      imagen: "assets/img/goggles.png",
      descripcion:
        "Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca."
    },
    {
      imagen: "assets/img/goggles.png",
      descripcion:
        "Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca."
    },
    {
      imagen: "assets/img/goggles.png",
      descripcion:
        "Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca."
    },
    {
      imagen: "assets/img/goggles.png",
      descripcion:
        "Más de 200 contenidos de Realidad Virtual para el departamento de Cundinamarca."
    }
  ];
  constructor() {}

  ngOnInit() {}
}
