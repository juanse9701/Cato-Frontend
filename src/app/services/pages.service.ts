import { Injectable } from '@angular/core';
import { Pagina } from '../shared/components/page-layout/page-layout.component';
import { Apollo } from 'apollo-angular';
import { QUERYGENERAL } from '../core/graphql/Query';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Page, Section } from '../core/interface/page.interface';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  private clientesNosotros: Section = {
    title: 'Clientes',
    description: '',
    component: 'section-with-multiple-subsection',
    posts: [
      {
        title: 'sector privador',
        extraposts: [
          {
            image: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            image: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            image: 'assets/img/llanocentro.png',
            title: 'Llanocentro'
          },
          {
            image: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            image: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            image: 'assets/img/llanocentro.png',
            title: 'Llanocentro'
          }
        ]
      },
      {
        title: 'sector público',
        extraposts: [
          {
            image: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            image: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            image: 'assets/img/llanocentro.png',
            title: 'Llanocentro'
          },
          {
            image: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            image: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            image: 'assets/img/llanocentro.png',
            title: 'Llanocentro'
          }
        ]
      },
      {
        title: "ong's",
        extraposts: [
          {
            image: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            image: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            image: 'assets/img/llanocentro.png',
            title: 'Llanocentro'
          },
          {
            image: 'assets/img/unicentro.png',
            title: 'Unicentro'
          },
          {
            image: 'assets/img/congente.png',
            title: 'Congente'
          },
          {
            image: 'assets/img/realityapp.png',
            title: 'Llanocentro'
          }
        ]
      }
    ]
  };
  private desarrollosDeAutoriaNosotros: Section = {
    title: 'Desarrollos de autoria',
    component: 'section-with-collapsible-grid',
    posts: [
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      }
    ]
  };
  private desarrollosTecnologicosNosotros: any = {
    title: 'Desarrollos tecnológicos',
    type: 'doble',
    typeStyle: 'cuadrado',
    component: 'section-with-collapsible-grid',
    posts: [
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      },
      {
        description: 'Gestor de realidad virtual y aumentada',
        title: 'Departamento de Cundinamarca',
        image: 'assets/img/realityapp.png'
      }
    ]
  };
  private valoresNosotros: Section = {
    title: 'Valores y principios coorporativos',
    component: 'section-simple2',
    color: '#1414141',
    posts: [
      {
        title: 'Igualdad',
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid magnam totam sed at eveniet, numquam
          nesciunt adipisci minima! Iusto nam, ratione dicta quis consequatur porro dignissimos blanditiis reiciendis
          incidunt praesentium?`,
        image: 'https://fierros.com.co/wp-content/uploads/2018/06/trabajo-en-equipo-1500x800.jpg',
      },
      {
        title: 'Igualdad',
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid magnam totam sed at eveniet, numquam
          nesciunt adipisci minima! Iusto nam, ratione dicta quis consequatur porro dignissimos blanditiis reiciendis
          incidunt praesentium?`,
        image: 'https://fierros.com.co/wp-content/uploads/2018/06/trabajo-en-equipo-1500x800.jpg',
      },
      {
        title: 'Igualdad',
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid magnam totam sed at eveniet, numquam
          nesciunt adipisci minima! Iusto nam, ratione dicta quis consequatur porro dignissimos blanditiis reiciendis
          incidunt praesentium?`,
        image: 'https://fierros.com.co/wp-content/uploads/2018/06/trabajo-en-equipo-1500x800.jpg',
      }
    ]
  };
  private nosotrosNosotros: Section = {
    title: 'Nosotros',
    component: 'section-with-text-grid',
    posts: [
      {
        title: 'Objetivo general',
        description: `Contribuir de manera integral con la edificación del ecosistema social del cual
hagamos parte, promoviendo siempre el conocimiento, la innovación y el uso
de tecnologías que sirvan como impulsores para que nuestro equipo humano,
clientes y usuarios incrementen sus niveles de prosperidad, satisfacción
individual y bienestar colectivo.`,
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
      },
      {
        title: 'Política de calidad',
        description: `En Grupo Tecnológico CATO S.A.S. entendemos que el pilar fundamental de la
calidad es la satisfacción total del cliente, por esta razón integramos al mejor
equipo humano capaz de liderar grandes retos que involucren diversas áreas
del conocimiento y múltiples parámetros y estándares de calidad que
garanticen la consecución del éxito.`,
      },
      {
        title: 'Visión',
        description: `Grupo Tecnológico CATO S.A.S. será reconocida en 2019 como una
organización líder en Latinoamérica por su capacidad de generación de
modelos de negocios innovadores de alto impacto social, tecnológico y
económico, capaces de impactar todo tipo de ecosistemas sociales los cuales
cada vez demandan mayor calidad, confiabilidad, sencillez y limpieza en sus
procesos del día a día.`,
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

  private innovacion: any = {
    id: 'innovacion',
    title: 'Innovación y aplicaciones',
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    image: 'assets/img/aplicaciones.png',
    sections: [
      {
        title: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        image: 'assets/img/red.png',
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
        image: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
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
            image:
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
            image:
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
            image:
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
            image:
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
        image: 'assets/img/red.png',
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
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
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
        image: 'assets/img/red.png',
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
        image: 'assets/img/red.png',
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
  private proyectos: any = {
    id: 'proyectos',
    title: 'Gestión de proyectos',
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    image: 'assets/img/aplicaciones.png',
    sections: [
      {
        title: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        image: 'assets/img/red.png',
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
        image: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            image:
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
            image:
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
            image:
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
            image:
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
            image:
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
        image: 'assets/img/red.png',
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
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
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
        image: 'assets/img/red.png',
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
        image: 'assets/img/red.png',
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
  private software: any = {
    id: 'software',
    title: 'Fábrica de software',
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    image: 'assets/img/aplicaciones.png',
    sections: [
      {
        title: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        image: 'assets/img/red.png',
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
        image: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            image:
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
            image:
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
            image:
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
            image:
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
            image:
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
        image: 'assets/img/red.png',
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
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
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
        image: 'assets/img/red.png',
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
        image: 'assets/img/red.png',
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
  private hardware: any = {
    id: 'hardware',
    title: 'Hardware',
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    image: 'assets/img/aplicaciones.png',
    sections: [
      {
        title: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        image: 'assets/img/red.png',
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
        image: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            image:
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
            image:
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
            image:
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
            image:
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
            image:
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
        image: 'assets/img/red.png',
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
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
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
        image: 'assets/img/red.png',
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
        image: 'assets/img/red.png',
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
  private formacion: any = {
    id: 'formacion',
    title: 'Formación',
    description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    image: 'assets/img/aplicaciones.png',
    sections: [
      {
        title: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitle: 'Más de 20 marcas mundiales',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        image: 'assets/img/red.png',
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
        image: 'assets/img/red.png',
        buttons: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            image:
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
            image:
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
            image:
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
            image:
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
            image:
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
        image: 'assets/img/red.png',
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
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
                descripcion: 'Licenciamiento Oracle: Base de datos, servidor web, Virtualizador, Java, entre otros. '
              },
              {
                image: 'https://www.solucionesorion.com/wp-content/uploads/2018/08/p-micro.png',
                descripcion:
                  'Licenciamiento Microsoft: Windows, Office, Win server, SQL server, .Net framework, entre otros.'
              },
              {
                image: 'https://i.blogs.es/9547d8/oracle-logo/450_1000.png',
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
        image: 'assets/img/red.png',
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
        image: 'assets/img/red.png',
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
    return [];
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
