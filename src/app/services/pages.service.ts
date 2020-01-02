import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  // Información del home
  private clientesHome: any = {
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
  private casosDeExitoHome: any = {
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
  private lineasTecnologicasHome: any = {
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
  private desarrollosDeAutoriaHome: any = {
    componentName: 'section-simple',
    title: 'Desarrollos de autoria',
    type: 'doble',
    typeStyle: 'redondo',
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
  private capacidadesHome: any = {
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
  private home: any[] = [
    this.lineasTecnologicasHome,
    this.casosDeExitoHome,
    this.capacidadesHome,
    this.clientesHome,
    this.desarrollosDeAutoriaHome
  ];

  private clientesNosotros: any = {
    title: 'Clientes',
    description: '',
    componentName: 'section-with-multiple-subsection',
    items: [
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
    ]
  };
  private desarrollosDeAutoriaNosotros: any = {
    title: 'Desarrollos de autoria',
    type: 'simple',
    typeStyle: 'cuadrado',
    componentName: 'section-with-collapsible-grid',
    data: [
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
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        img: 'assets/img/realityapp.png'
      }
    ]
  };
  private desarrollosTecnologicosNosotros: any = {
    title: 'Desarrollos tecnológicos',
    type: 'doble',
    typeStyle: 'cuadrado',
    componentName: 'section-with-collapsible-grid',
    data: [
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
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        img: 'assets/img/realityapp.png'
      }
    ]
  };
  private valoresNosotros: any = {
    title: 'Valores y principios coorporativos',
    componentName: 'section-simple2',
    data: [
      {
        title: 'Igualdad',
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid magnam totam sed at eveniet, numquam
          nesciunt adipisci minima! Iusto nam, ratione dicta quis consequatur porro dignissimos blanditiis reiciendis
          incidunt praesentium?`,
        img: 'https://fierros.com.co/wp-content/uploads/2018/06/trabajo-en-equipo-1500x800.jpg',
        color: 'grey'
      },
      {
        title: 'Igualdad',
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid magnam totam sed at eveniet, numquam
          nesciunt adipisci minima! Iusto nam, ratione dicta quis consequatur porro dignissimos blanditiis reiciendis
          incidunt praesentium?`,
        img: 'https://fierros.com.co/wp-content/uploads/2018/06/trabajo-en-equipo-1500x800.jpg',
        color: 'red'
      },
      {
        title: 'Igualdad',
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid magnam totam sed at eveniet, numquam
          nesciunt adipisci minima! Iusto nam, ratione dicta quis consequatur porro dignissimos blanditiis reiciendis
          incidunt praesentium?`,
        img: 'https://fierros.com.co/wp-content/uploads/2018/06/trabajo-en-equipo-1500x800.jpg',
        color: 'yellow'
      }
    ]
  };
  private nosotrosNosotros: any = {
    title: 'Nosotros',
    componentName: 'section-with-text-grid',
    info: [
      {
        title: 'Objetivo general',
        description: `Contribuir de manera integral con la edificación del ecosistema social del cual
hagamos parte, promoviendo siempre el conocimiento, la innovación y el uso
de tecnologías que sirvan como impulsores para que nuestro equipo humano,
clientes y usuarios incrementen sus niveles de prosperidad, satisfacción
individual y bienestar colectivo.`,
        img: ''
      },
      {
        title: 'Misión',
        description: `Grupo Tecnológico CATO S.A.S. es una compañía que brinda diversos paquetes
de soluciones en tecnologías de punta para la comunidad en general, el sector
público y el sector privado, promoviendo el bienestar social, el apalancamiento
productivo y la generación de conocimiento a través de la integración de un
equipo humano innovador, calificado y altamente comprometido en la
consecución del logro de resultados y la generación de modelos colaborativos
óptimos para la satisfacción del cliente.`,
        img: ''
      },
      {
        title: 'Política de calidad',
        description: `En Grupo Tecnológico CATO S.A.S. entendemos que el pilar fundamental de la
calidad es la satisfacción total del cliente, por esta razón integramos al mejor
equipo humano capaz de liderar grandes retos que involucren diversas áreas
del conocimiento y múltiples parámetros y estándares de calidad que
garanticen la consecución del éxito.`,
        img: ''
      },
      {
        title: 'Visión',
        description: `Grupo Tecnológico CATO S.A.S. será reconocida en 2019 como una
organización líder en Latinoamérica por su capacidad de generación de
modelos de negocios innovadores de alto impacto social, tecnológico y
económico, capaces de impactar todo tipo de ecosistemas sociales los cuales
cada vez demandan mayor calidad, confiabilidad, sencillez y limpieza en sus
procesos del día a día.`,
        img: ''
      }
    ]
  };
  private nosotros = [
    this.desarrollosDeAutoriaNosotros,
    this.nosotrosNosotros,
    this.valoresNosotros,
    this.clientesNosotros,
    this.desarrollosTecnologicosNosotros
  ];
  constructor() {}

  getHome(): any[] {
    return this.home;
  }

  getNosotros(): any[] {
    return this.nosotros;
  }
}
