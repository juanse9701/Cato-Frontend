import { Injectable } from '@angular/core';
import { Pagina } from '../shared/components/page-layout/page-layout.component';
import { Apollo } from 'apollo-angular';
import { QUERYGENERAL } from '../core/graphql/Query';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Page } from '../core/interface/page.interface';

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
    this.capacidadesHome,
    this.lineasTecnologicasHome,
    this.casosDeExitoHome,
    this.desarrollosDeAutoriaHome,
    this.clientesHome
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
        img: {
          type: 'font',
          source: 'fas fa-bullseye',
          color: 'var(--main-red)'
        }
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
        img: {
          type: 'font',
          source: 'fas fa-map-signs',
          color: 'var(--main-red)'
        }
      },
      {
        title: 'Política de calidad',
        description: `En Grupo Tecnológico CATO S.A.S. entendemos que el pilar fundamental de la
calidad es la satisfacción total del cliente, por esta razón integramos al mejor
equipo humano capaz de liderar grandes retos que involucren diversas áreas
del conocimiento y múltiples parámetros y estándares de calidad que
garanticen la consecución del éxito.`,
        img: {
          type: 'font',
          source: 'fas fa-award',
          color: 'var(--main-red)'
        }
      },
      {
        title: 'Visión',
        description: `Grupo Tecnológico CATO S.A.S. será reconocida en 2019 como una
organización líder en Latinoamérica por su capacidad de generación de
modelos de negocios innovadores de alto impacto social, tecnológico y
económico, capaces de impactar todo tipo de ecosistemas sociales los cuales
cada vez demandan mayor calidad, confiabilidad, sencillez y limpieza en sus
procesos del día a día.`,
        img: {
          type: 'font',
          source: 'far fa-eye',
          color: 'var(--main-red)'
        }
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

  private innovacion: Pagina = {
    id: 'innovacion',
    title: 'Innovación y aplicaciones',
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    img: 'assets/img/aplicaciones.png',
    sections: [
      {
        title: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 1,
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            contenido: 'Más información',
            color: 'white',
            background: 'var(--main-red)'
          }
        ],
        data: [
          {
            estilo: 1,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `<strong>Optimización en la enseñanza-aprendizaje</strong>, al lograr que la institución brinde el apoyo y
      acompañamiento necesario a sus estudiantes a través de aulas virtuales mientras se le permite desempeñarse en sus
      diferentes asignaturas, permitiendo así conocer las fortalezas, debilidades y competencias de su estudiantado.<br />
      <br />
      <strong>Medición de los resultados de desempeño</strong>, de los cuales se tomarán decisiones en acciones de
      refuerzo educativo y preparación que propendan por el mejoramiento y la alta calidad de la institución, y así
      potencializar el alcance de los objetivos en los estándares propuestos por las entidades reguladoras y/o
      validadoras. <br />
      <br />
      <strong>Reconocimiento y Calidad</strong>, al incrementar el nivel de formación, el compromiso social y la
      innovación en la comunidad académica, ésta será reconocida como una impulsadora de la calidad de sus procesos
      educativos. <br /><br />
      <strong>Optimización de gastos</strong>, la inversión económica en procesos de preparación y evaluación Pre-ICFES
      descenderán gracias a la posibilidad de reúso y a los canales de comunicación que brinda el sistema, por ejemplo
      para la generación de simulacros, difusión de material de apoyo, noticias, eventos, entre otros. <br />
      <br />
      <strong>Enfoque social</strong>, Promueve la interacción, pertenencia, inclusión y participación entre docentes y
      estudiantes, por medio de herramientas como: calendarios de eventos, socializaciones, encuestas y notificaciones,
      usando la tecnología para generar un ambiente amigable basado en la cultura digital global. <br />
      <br />
      <strong>Optimización de procesos</strong>, gestión institucional, recurso humano, administrativa y formativa, todo
      será de una manera más eficiente y ágil.`
          }
        ]
      },
      {
        title: 'Realidad aumentada',
        id: 'realidad-aumentada',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'aplisaber',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'electus',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          }
        ],
        data: [
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------1------Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------2------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------3------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------4------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------5------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          }
        ]
      },
      {
        title: 'Realidad aumentada 2',
        id: 'realidad-aumentada-2',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          }
        ],
        data: [
          {
            estilo: 3,
            items: [
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              }
            ]
          },
          {
            estilo: 1,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `<strong>Optimización en la enseñanza-aprendizaje</strong>, al lograr que la institución brinde el apoyo y
      acompañamiento necesario a sus estudiantes a través de aulas virtuales mientras se le permite desempeñarse en sus
      diferentes asignaturas, permitiendo así conocer las fortalezas, debilidades y competencias de su estudiantado.<br />
      <br />
      <strong>Medición de los resultados de desempeño</strong>, de los cuales se tomarán decisiones en acciones de
      refuerzo educativo y preparación que propendan por el mejoramiento y la alta calidad de la institución, y así
      potencializar el alcance de los objetivos en los estándares propuestos por las entidades reguladoras y/o
      validadoras. <br />
      <br />
      <strong>Reconocimiento y Calidad</strong>, al incrementar el nivel de formación, el compromiso social y la
      innovación en la comunidad académica, ésta será reconocida como una impulsadora de la calidad de sus procesos
      educativos. <br /><br />
      <strong>Optimización de gastos</strong>, la inversión económica en procesos de preparación y evaluación Pre-ICFES
      descenderán gracias a la posibilidad de reúso y a los canales de comunicación que brinda el sistema, por ejemplo
      para la generación de simulacros, difusión de material de apoyo, noticias, eventos, entre otros. <br />
      <br />
      <strong>Enfoque social</strong>, Promueve la interacción, pertenencia, inclusión y participación entre docentes y
      estudiantes, por medio de herramientas como: calendarios de eventos, socializaciones, encuestas y notificaciones,
      usando la tecnología para generar un ambiente amigable basado en la cultura digital global. <br />
      <br />
      <strong>Optimización de procesos</strong>, gestión institucional, recurso humano, administrativa y formativa, todo
      será de una manera más eficiente y ágil.`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            imgSecundaria: 'assets/img/realityapp.png',
            contenido: `Haga realidad sus proyectos potencializado sus capacidades a través del
uso de nuevos métodos y herramientas informáticas que fortalezcan su
modelo de negocio, evitando tareas engorrosas, reprocesos y pérdida de
tiempo en su equipo de trabajo, clientes y usuarios; estableciendo metas,
requerimientos y parámetros de innovación que puedan traducirse en la
construcción, desarrollo e integración de productos de software y
hardware que brinden solución a sus necesidades`
          }
        ]
      },
      {
        title: 'Realidad aumentada 3',
        id: 'realidad-aumentada-3',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 1,
            color: 'white',
            background: 'var(--main-red)',
            contenido: 'Más información',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            }
          }
        ],
        data: [
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            imgSecundaria: 'assets/img/realityapp.png',
            contenido: `Haga realidad sus proyectos potencializado sus capacidades a través del
uso de nuevos métodos y herramientas informáticas que fortalezcan su
modelo de negocio, evitando tareas engorrosas, reprocesos y pérdida de
tiempo en su equipo de trabajo, clientes y usuarios; estableciendo metas,
requerimientos y parámetros de innovación que puedan traducirse en la
construcción, desarrollo e integración de productos de software y
hardware que brinden solución a sus necesidades`
          }
        ]
      },
      {
        title: 'Realidad virtual sin más',
        id: 'realidad-virtual-sin-mas',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [],
        data: [
          {
            estilo: 1,
            imgPrincipal: ''
          }
        ]
      }
    ]
  };
  private proyectos: Pagina = {
    id: 'proyectos',
    title: 'Gestión de proyectos',
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    img: 'assets/img/aplicaciones.png',
    sections: [
      {
        title: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 1,
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            contenido: 'Más información',
            color: 'white',
            background: 'var(--main-red)'
          }
        ],
        data: [
          {
            estilo: 1,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `<strong>Optimización en la enseñanza-aprendizaje</strong>, al lograr que la institución brinde el apoyo y
      acompañamiento necesario a sus estudiantes a través de aulas virtuales mientras se le permite desempeñarse en sus
      diferentes asignaturas, permitiendo así conocer las fortalezas, debilidades y competencias de su estudiantado.<br />
      <br />
      <strong>Medición de los resultados de desempeño</strong>, de los cuales se tomarán decisiones en acciones de
      refuerzo educativo y preparación que propendan por el mejoramiento y la alta calidad de la institución, y así
      potencializar el alcance de los objetivos en los estándares propuestos por las entidades reguladoras y/o
      validadoras. <br />
      <br />
      <strong>Reconocimiento y Calidad</strong>, al incrementar el nivel de formación, el compromiso social y la
      innovación en la comunidad académica, ésta será reconocida como una impulsadora de la calidad de sus procesos
      educativos. <br /><br />
      <strong>Optimización de gastos</strong>, la inversión económica en procesos de preparación y evaluación Pre-ICFES
      descenderán gracias a la posibilidad de reúso y a los canales de comunicación que brinda el sistema, por ejemplo
      para la generación de simulacros, difusión de material de apoyo, noticias, eventos, entre otros. <br />
      <br />
      <strong>Enfoque social</strong>, Promueve la interacción, pertenencia, inclusión y participación entre docentes y
      estudiantes, por medio de herramientas como: calendarios de eventos, socializaciones, encuestas y notificaciones,
      usando la tecnología para generar un ambiente amigable basado en la cultura digital global. <br />
      <br />
      <strong>Optimización de procesos</strong>, gestión institucional, recurso humano, administrativa y formativa, todo
      será de una manera más eficiente y ágil.`
          }
        ]
      },
      {
        title: 'Realidad aumentada',
        id: 'realidad-aumentada',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'aplisaber',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'electus',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          }
        ],
        data: [
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------1------Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------2------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------3------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------4------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------5------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          }
        ]
      },
      {
        title: 'Realidad aumentada 2',
        id: 'realidad-aumentada-2',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          }
        ],
        data: [
          {
            estilo: 3,
            items: [
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              }
            ]
          },
          {
            estilo: 1,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `<strong>Optimización en la enseñanza-aprendizaje</strong>, al lograr que la institución brinde el apoyo y
      acompañamiento necesario a sus estudiantes a través de aulas virtuales mientras se le permite desempeñarse en sus
      diferentes asignaturas, permitiendo así conocer las fortalezas, debilidades y competencias de su estudiantado.<br />
      <br />
      <strong>Medición de los resultados de desempeño</strong>, de los cuales se tomarán decisiones en acciones de
      refuerzo educativo y preparación que propendan por el mejoramiento y la alta calidad de la institución, y así
      potencializar el alcance de los objetivos en los estándares propuestos por las entidades reguladoras y/o
      validadoras. <br />
      <br />
      <strong>Reconocimiento y Calidad</strong>, al incrementar el nivel de formación, el compromiso social y la
      innovación en la comunidad académica, ésta será reconocida como una impulsadora de la calidad de sus procesos
      educativos. <br /><br />
      <strong>Optimización de gastos</strong>, la inversión económica en procesos de preparación y evaluación Pre-ICFES
      descenderán gracias a la posibilidad de reúso y a los canales de comunicación que brinda el sistema, por ejemplo
      para la generación de simulacros, difusión de material de apoyo, noticias, eventos, entre otros. <br />
      <br />
      <strong>Enfoque social</strong>, Promueve la interacción, pertenencia, inclusión y participación entre docentes y
      estudiantes, por medio de herramientas como: calendarios de eventos, socializaciones, encuestas y notificaciones,
      usando la tecnología para generar un ambiente amigable basado en la cultura digital global. <br />
      <br />
      <strong>Optimización de procesos</strong>, gestión institucional, recurso humano, administrativa y formativa, todo
      será de una manera más eficiente y ágil.`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            imgSecundaria: 'assets/img/realityapp.png',
            contenido: `Haga realidad sus proyectos potencializado sus capacidades a través del
uso de nuevos métodos y herramientas informáticas que fortalezcan su
modelo de negocio, evitando tareas engorrosas, reprocesos y pérdida de
tiempo en su equipo de trabajo, clientes y usuarios; estableciendo metas,
requerimientos y parámetros de innovación que puedan traducirse en la
construcción, desarrollo e integración de productos de software y
hardware que brinden solución a sus necesidades`
          }
        ]
      },
      {
        title: 'Realidad aumentada 3',
        id: 'realidad-aumentada-3',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 1,
            color: 'white',
            background: 'var(--main-red)',
            contenido: 'Más información',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            }
          }
        ],
        data: [
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            imgSecundaria: 'assets/img/realityapp.png',
            contenido: `Haga realidad sus proyectos potencializado sus capacidades a través del
uso de nuevos métodos y herramientas informáticas que fortalezcan su
modelo de negocio, evitando tareas engorrosas, reprocesos y pérdida de
tiempo en su equipo de trabajo, clientes y usuarios; estableciendo metas,
requerimientos y parámetros de innovación que puedan traducirse en la
construcción, desarrollo e integración de productos de software y
hardware que brinden solución a sus necesidades`
          }
        ]
      },
      {
        title: 'Realidad virtual sin más',
        id: 'realidad-virtual-sin-mas',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [],
        data: [
          {
            estilo: 1,
            imgPrincipal: ''
          }
        ]
      }
    ]
  };
  private software: Pagina = {
    id: 'software',
    title: 'Fábrica de software',
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    img: 'assets/img/aplicaciones.png',
    sections: [
      {
        title: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 1,
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            contenido: 'Más información',
            color: 'white',
            background: 'var(--main-red)'
          }
        ],
        data: [
          {
            estilo: 1,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `<strong>Optimización en la enseñanza-aprendizaje</strong>, al lograr que la institución brinde el apoyo y
      acompañamiento necesario a sus estudiantes a través de aulas virtuales mientras se le permite desempeñarse en sus
      diferentes asignaturas, permitiendo así conocer las fortalezas, debilidades y competencias de su estudiantado.<br />
      <br />
      <strong>Medición de los resultados de desempeño</strong>, de los cuales se tomarán decisiones en acciones de
      refuerzo educativo y preparación que propendan por el mejoramiento y la alta calidad de la institución, y así
      potencializar el alcance de los objetivos en los estándares propuestos por las entidades reguladoras y/o
      validadoras. <br />
      <br />
      <strong>Reconocimiento y Calidad</strong>, al incrementar el nivel de formación, el compromiso social y la
      innovación en la comunidad académica, ésta será reconocida como una impulsadora de la calidad de sus procesos
      educativos. <br /><br />
      <strong>Optimización de gastos</strong>, la inversión económica en procesos de preparación y evaluación Pre-ICFES
      descenderán gracias a la posibilidad de reúso y a los canales de comunicación que brinda el sistema, por ejemplo
      para la generación de simulacros, difusión de material de apoyo, noticias, eventos, entre otros. <br />
      <br />
      <strong>Enfoque social</strong>, Promueve la interacción, pertenencia, inclusión y participación entre docentes y
      estudiantes, por medio de herramientas como: calendarios de eventos, socializaciones, encuestas y notificaciones,
      usando la tecnología para generar un ambiente amigable basado en la cultura digital global. <br />
      <br />
      <strong>Optimización de procesos</strong>, gestión institucional, recurso humano, administrativa y formativa, todo
      será de una manera más eficiente y ágil.`
          }
        ]
      },
      {
        title: 'Realidad aumentada',
        id: 'realidad-aumentada',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'aplisaber',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'electus',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          }
        ],
        data: [
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------1------Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------2------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------3------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------4------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------5------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          }
        ]
      },
      {
        title: 'Realidad aumentada 2',
        id: 'realidad-aumentada-2',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          }
        ],
        data: [
          {
            estilo: 3,
            items: [
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              }
            ]
          },
          {
            estilo: 1,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `<strong>Optimización en la enseñanza-aprendizaje</strong>, al lograr que la institución brinde el apoyo y
      acompañamiento necesario a sus estudiantes a través de aulas virtuales mientras se le permite desempeñarse en sus
      diferentes asignaturas, permitiendo así conocer las fortalezas, debilidades y competencias de su estudiantado.<br />
      <br />
      <strong>Medición de los resultados de desempeño</strong>, de los cuales se tomarán decisiones en acciones de
      refuerzo educativo y preparación que propendan por el mejoramiento y la alta calidad de la institución, y así
      potencializar el alcance de los objetivos en los estándares propuestos por las entidades reguladoras y/o
      validadoras. <br />
      <br />
      <strong>Reconocimiento y Calidad</strong>, al incrementar el nivel de formación, el compromiso social y la
      innovación en la comunidad académica, ésta será reconocida como una impulsadora de la calidad de sus procesos
      educativos. <br /><br />
      <strong>Optimización de gastos</strong>, la inversión económica en procesos de preparación y evaluación Pre-ICFES
      descenderán gracias a la posibilidad de reúso y a los canales de comunicación que brinda el sistema, por ejemplo
      para la generación de simulacros, difusión de material de apoyo, noticias, eventos, entre otros. <br />
      <br />
      <strong>Enfoque social</strong>, Promueve la interacción, pertenencia, inclusión y participación entre docentes y
      estudiantes, por medio de herramientas como: calendarios de eventos, socializaciones, encuestas y notificaciones,
      usando la tecnología para generar un ambiente amigable basado en la cultura digital global. <br />
      <br />
      <strong>Optimización de procesos</strong>, gestión institucional, recurso humano, administrativa y formativa, todo
      será de una manera más eficiente y ágil.`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            imgSecundaria: 'assets/img/realityapp.png',
            contenido: `Haga realidad sus proyectos potencializado sus capacidades a través del
uso de nuevos métodos y herramientas informáticas que fortalezcan su
modelo de negocio, evitando tareas engorrosas, reprocesos y pérdida de
tiempo en su equipo de trabajo, clientes y usuarios; estableciendo metas,
requerimientos y parámetros de innovación que puedan traducirse en la
construcción, desarrollo e integración de productos de software y
hardware que brinden solución a sus necesidades`
          }
        ]
      },
      {
        title: 'Realidad aumentada 3',
        id: 'realidad-aumentada-3',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 1,
            color: 'white',
            background: 'var(--main-red)',
            contenido: 'Más información',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            }
          }
        ],
        data: [
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            imgSecundaria: 'assets/img/realityapp.png',
            contenido: `Haga realidad sus proyectos potencializado sus capacidades a través del
uso de nuevos métodos y herramientas informáticas que fortalezcan su
modelo de negocio, evitando tareas engorrosas, reprocesos y pérdida de
tiempo en su equipo de trabajo, clientes y usuarios; estableciendo metas,
requerimientos y parámetros de innovación que puedan traducirse en la
construcción, desarrollo e integración de productos de software y
hardware que brinden solución a sus necesidades`
          }
        ]
      },
      {
        title: 'Realidad virtual sin más',
        id: 'realidad-virtual-sin-mas',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [],
        data: [
          {
            estilo: 1,
            imgPrincipal: ''
          }
        ]
      }
    ]
  };
  private hardware: Pagina = {
    id: 'hardware',
    title: 'Hardware',
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    img: 'assets/img/aplicaciones.png',
    sections: [
      {
        title: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 1,
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            contenido: 'Más información',
            color: 'white',
            background: 'var(--main-red)'
          }
        ],
        data: [
          {
            estilo: 1,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `<strong>Optimización en la enseñanza-aprendizaje</strong>, al lograr que la institución brinde el apoyo y
      acompañamiento necesario a sus estudiantes a través de aulas virtuales mientras se le permite desempeñarse en sus
      diferentes asignaturas, permitiendo así conocer las fortalezas, debilidades y competencias de su estudiantado.<br />
      <br />
      <strong>Medición de los resultados de desempeño</strong>, de los cuales se tomarán decisiones en acciones de
      refuerzo educativo y preparación que propendan por el mejoramiento y la alta calidad de la institución, y así
      potencializar el alcance de los objetivos en los estándares propuestos por las entidades reguladoras y/o
      validadoras. <br />
      <br />
      <strong>Reconocimiento y Calidad</strong>, al incrementar el nivel de formación, el compromiso social y la
      innovación en la comunidad académica, ésta será reconocida como una impulsadora de la calidad de sus procesos
      educativos. <br /><br />
      <strong>Optimización de gastos</strong>, la inversión económica en procesos de preparación y evaluación Pre-ICFES
      descenderán gracias a la posibilidad de reúso y a los canales de comunicación que brinda el sistema, por ejemplo
      para la generación de simulacros, difusión de material de apoyo, noticias, eventos, entre otros. <br />
      <br />
      <strong>Enfoque social</strong>, Promueve la interacción, pertenencia, inclusión y participación entre docentes y
      estudiantes, por medio de herramientas como: calendarios de eventos, socializaciones, encuestas y notificaciones,
      usando la tecnología para generar un ambiente amigable basado en la cultura digital global. <br />
      <br />
      <strong>Optimización de procesos</strong>, gestión institucional, recurso humano, administrativa y formativa, todo
      será de una manera más eficiente y ágil.`
          }
        ]
      },
      {
        title: 'Realidad aumentada',
        id: 'realidad-aumentada',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'aplisaber',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'electus',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          }
        ],
        data: [
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------1------Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------2------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------3------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------4------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------5------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          }
        ]
      },
      {
        title: 'Realidad aumentada 2',
        id: 'realidad-aumentada-2',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          }
        ],
        data: [
          {
            estilo: 3,
            items: [
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              }
            ]
          },
          {
            estilo: 1,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `<strong>Optimización en la enseñanza-aprendizaje</strong>, al lograr que la institución brinde el apoyo y
      acompañamiento necesario a sus estudiantes a través de aulas virtuales mientras se le permite desempeñarse en sus
      diferentes asignaturas, permitiendo así conocer las fortalezas, debilidades y competencias de su estudiantado.<br />
      <br />
      <strong>Medición de los resultados de desempeño</strong>, de los cuales se tomarán decisiones en acciones de
      refuerzo educativo y preparación que propendan por el mejoramiento y la alta calidad de la institución, y así
      potencializar el alcance de los objetivos en los estándares propuestos por las entidades reguladoras y/o
      validadoras. <br />
      <br />
      <strong>Reconocimiento y Calidad</strong>, al incrementar el nivel de formación, el compromiso social y la
      innovación en la comunidad académica, ésta será reconocida como una impulsadora de la calidad de sus procesos
      educativos. <br /><br />
      <strong>Optimización de gastos</strong>, la inversión económica en procesos de preparación y evaluación Pre-ICFES
      descenderán gracias a la posibilidad de reúso y a los canales de comunicación que brinda el sistema, por ejemplo
      para la generación de simulacros, difusión de material de apoyo, noticias, eventos, entre otros. <br />
      <br />
      <strong>Enfoque social</strong>, Promueve la interacción, pertenencia, inclusión y participación entre docentes y
      estudiantes, por medio de herramientas como: calendarios de eventos, socializaciones, encuestas y notificaciones,
      usando la tecnología para generar un ambiente amigable basado en la cultura digital global. <br />
      <br />
      <strong>Optimización de procesos</strong>, gestión institucional, recurso humano, administrativa y formativa, todo
      será de una manera más eficiente y ágil.`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            imgSecundaria: 'assets/img/realityapp.png',
            contenido: `Haga realidad sus proyectos potencializado sus capacidades a través del
uso de nuevos métodos y herramientas informáticas que fortalezcan su
modelo de negocio, evitando tareas engorrosas, reprocesos y pérdida de
tiempo en su equipo de trabajo, clientes y usuarios; estableciendo metas,
requerimientos y parámetros de innovación que puedan traducirse en la
construcción, desarrollo e integración de productos de software y
hardware que brinden solución a sus necesidades`
          }
        ]
      },
      {
        title: 'Realidad aumentada 3',
        id: 'realidad-aumentada-3',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 1,
            color: 'white',
            background: 'var(--main-red)',
            contenido: 'Más información',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            }
          }
        ],
        data: [
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            imgSecundaria: 'assets/img/realityapp.png',
            contenido: `Haga realidad sus proyectos potencializado sus capacidades a través del
uso de nuevos métodos y herramientas informáticas que fortalezcan su
modelo de negocio, evitando tareas engorrosas, reprocesos y pérdida de
tiempo en su equipo de trabajo, clientes y usuarios; estableciendo metas,
requerimientos y parámetros de innovación que puedan traducirse en la
construcción, desarrollo e integración de productos de software y
hardware que brinden solución a sus necesidades`
          }
        ]
      },
      {
        title: 'Realidad virtual sin más',
        id: 'realidad-virtual-sin-mas',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [],
        data: [
          {
            estilo: 1,
            imgPrincipal: ''
          }
        ]
      }
    ]
  };
  private formacion: Pagina = {
    id: 'formacion',
    title: 'Formación',
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    img: 'assets/img/aplicaciones.png',
    sections: [
      {
        title: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 1,
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            contenido: 'Más información',
            color: 'white',
            background: 'var(--main-red)'
          }
        ],
        data: [
          {
            estilo: 1,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `<strong>Optimización en la enseñanza-aprendizaje</strong>, al lograr que la institución brinde el apoyo y
      acompañamiento necesario a sus estudiantes a través de aulas virtuales mientras se le permite desempeñarse en sus
      diferentes asignaturas, permitiendo así conocer las fortalezas, debilidades y competencias de su estudiantado.<br />
      <br />
      <strong>Medición de los resultados de desempeño</strong>, de los cuales se tomarán decisiones en acciones de
      refuerzo educativo y preparación que propendan por el mejoramiento y la alta calidad de la institución, y así
      potencializar el alcance de los objetivos en los estándares propuestos por las entidades reguladoras y/o
      validadoras. <br />
      <br />
      <strong>Reconocimiento y Calidad</strong>, al incrementar el nivel de formación, el compromiso social y la
      innovación en la comunidad académica, ésta será reconocida como una impulsadora de la calidad de sus procesos
      educativos. <br /><br />
      <strong>Optimización de gastos</strong>, la inversión económica en procesos de preparación y evaluación Pre-ICFES
      descenderán gracias a la posibilidad de reúso y a los canales de comunicación que brinda el sistema, por ejemplo
      para la generación de simulacros, difusión de material de apoyo, noticias, eventos, entre otros. <br />
      <br />
      <strong>Enfoque social</strong>, Promueve la interacción, pertenencia, inclusión y participación entre docentes y
      estudiantes, por medio de herramientas como: calendarios de eventos, socializaciones, encuestas y notificaciones,
      usando la tecnología para generar un ambiente amigable basado en la cultura digital global. <br />
      <br />
      <strong>Optimización de procesos</strong>, gestión institucional, recurso humano, administrativa y formativa, todo
      será de una manera más eficiente y ágil.`
          }
        ]
      },
      {
        title: 'Realidad aumentada',
        id: 'realidad-aumentada',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'aplisaber',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'electus',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          }
        ],
        data: [
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------1------Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------2------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------3------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------4------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `------5------ Fórmese, entrénese y adquiera los conocimientos en temas como: <br />
      - Productividad Organizacional Mediante TICS. <br />
      - Estrategia y despliegue de Entornos Virtuales de Aprendizaje. <br />
      - Sistemas de Evaluación Pre-Pruebas Saber. <br />
      - Alfabetización Digital. <br />
      - Marketing Digital. <br />
      - Negocios Electrónicos. <br />
      - Edición de recursos multimedia (texto, imagen, audio y video) mediante software libre. <br />
      - Elaboración y publicación de contenidos digitales educativos. <br />
      - Apropiación y uso de laboratorios Tecno-Ambientales. <br />
      - TIC en la formación temprana de vocaciones científicas. <br />
      - Sensibilización pedagógica en desarrollo sostenible. <br />
      - Sensibilización en aprovechamiento de fuentes de energía no <br />
      convencionales. - Y mucho más`
          }
        ]
      },
      {
        title: 'Realidad aumentada 2',
        id: 'realidad-aumentada-2',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            },
            imgCheck: {
              type: 'font',
              source: 'far fa-check-circle'
            }
          }
        ],
        data: [
          {
            estilo: 3,
            items: [
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                img: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                img: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              }
            ]
          },
          {
            estilo: 1,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            contenido: `<strong>Optimización en la enseñanza-aprendizaje</strong>, al lograr que la institución brinde el apoyo y
      acompañamiento necesario a sus estudiantes a través de aulas virtuales mientras se le permite desempeñarse en sus
      diferentes asignaturas, permitiendo así conocer las fortalezas, debilidades y competencias de su estudiantado.<br />
      <br />
      <strong>Medición de los resultados de desempeño</strong>, de los cuales se tomarán decisiones en acciones de
      refuerzo educativo y preparación que propendan por el mejoramiento y la alta calidad de la institución, y así
      potencializar el alcance de los objetivos en los estándares propuestos por las entidades reguladoras y/o
      validadoras. <br />
      <br />
      <strong>Reconocimiento y Calidad</strong>, al incrementar el nivel de formación, el compromiso social y la
      innovación en la comunidad académica, ésta será reconocida como una impulsadora de la calidad de sus procesos
      educativos. <br /><br />
      <strong>Optimización de gastos</strong>, la inversión económica en procesos de preparación y evaluación Pre-ICFES
      descenderán gracias a la posibilidad de reúso y a los canales de comunicación que brinda el sistema, por ejemplo
      para la generación de simulacros, difusión de material de apoyo, noticias, eventos, entre otros. <br />
      <br />
      <strong>Enfoque social</strong>, Promueve la interacción, pertenencia, inclusión y participación entre docentes y
      estudiantes, por medio de herramientas como: calendarios de eventos, socializaciones, encuestas y notificaciones,
      usando la tecnología para generar un ambiente amigable basado en la cultura digital global. <br />
      <br />
      <strong>Optimización de procesos</strong>, gestión institucional, recurso humano, administrativa y formativa, todo
      será de una manera más eficiente y ágil.`
          },
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            imgSecundaria: 'assets/img/realityapp.png',
            contenido: `Haga realidad sus proyectos potencializado sus capacidades a través del
uso de nuevos métodos y herramientas informáticas que fortalezcan su
modelo de negocio, evitando tareas engorrosas, reprocesos y pérdida de
tiempo en su equipo de trabajo, clientes y usuarios; estableciendo metas,
requerimientos y parámetros de innovación que puedan traducirse en la
construcción, desarrollo e integración de productos de software y
hardware que brinden solución a sus necesidades`
          }
        ]
      },
      {
        title: 'Realidad aumentada 3',
        id: 'realidad-aumentada-3',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [
          {
            estilo: 1,
            color: 'white',
            background: 'var(--main-red)',
            contenido: 'Más información',
            imgIcono: {
              type: 'font',
              source: 'fas fa-angle-double-right'
            }
          }
        ],
        data: [
          {
            estilo: 2,
            imgPrincipal:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/YouTube_Logo.svg/1280px-YouTube_Logo.svg.png',
            imgSecundaria: 'assets/img/realityapp.png',
            contenido: `Haga realidad sus proyectos potencializado sus capacidades a través del
uso de nuevos métodos y herramientas informáticas que fortalezcan su
modelo de negocio, evitando tareas engorrosas, reprocesos y pérdida de
tiempo en su equipo de trabajo, clientes y usuarios; estableciendo metas,
requerimientos y parámetros de innovación que puedan traducirse en la
construcción, desarrollo e integración de productos de software y
hardware que brinden solución a sus necesidades`
          }
        ]
      },
      {
        title: 'Realidad virtual sin más',
        id: 'realidad-virtual-sin-mas',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        img: 'assets/img/red.png',
        buttons: [],
        data: [
          {
            estilo: 1,
            imgPrincipal: ''
          }
        ]
      }
    ]
  };
  private techLines: Pagina[] = [this.innovacion, this.proyectos, this.software, this.hardware, this.formacion];

  private menu: any[] = [
    {
      name: 'Innovación',
      url: 'innovación'
    },
    {
      name: 'Software',
      url: 'software'
    },
    {
      name: 'Hardware',
      url: 'hardware'
    },
    {
      name: 'Hardware',
      url: 'hardware'
    },
    {
      name: 'Proyectos',
      url: 'proyectos'
    },
    {
      name: 'Formación',
      url: 'formacion'
    }
  ];
  constructor(private apollo: Apollo) {}

  getHome(): any[] {
    return this.home;
  }

  getPage(slug: string, lang: string = 'ES'): Observable<Page> {
    return this.apollo.query({
      query: QUERYGENERAL,
      variables: {
        slug,
        lang
      }
    }).pipe(
      map( (response: any) => response.data.page)
    );
  }

  getNosotros(): any[] {
    return this.nosotros;
  }

  getTechLine(techLine: string): Pagina {
    const response = this.techLines.filter(item => item.id === techLine);
    if (response.length > 0) {
      return response[0];
    }
    return null;
  }

  getMenu(): any[] {
    return this.menu;
  }
}
