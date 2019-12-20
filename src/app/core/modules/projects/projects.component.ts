import { Component, OnInit } from '@angular/core';
import { Pagina } from 'src/app/shared/components/page-layout/page-layout.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Pagina = {
    nombre: 'Gestión de proyectos',
    descripcion: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
diam nonummy nibh euismod tincidunt ut laoreet dolore
magna aliquam erat volutpat.Ut wisi enim ad veniam, quis
nostrud exerci tation.`,
    imagen: 'assets/img/aplicaciones.png',
    secciones: [
      {
        nombre: 'Realidad virtual',
        id: 'realidad-virtual',
        subtitulo: 'Más de 20 marcas mundiales',
        contenido:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        imagen: 'assets/img/red.png',
        botones: [
          {
            estilo: 1,
            imgIcono: 'http://cdn.onlinewebfonts.com/svg/img_97521.png',
            contenido: 'Más información',
            color: 'white',
            background: 'var(--main-red)'
          }
        ],
        informacion: [
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
        nombre: 'Realidad aumentada',
        id: 'realidad-aumentada',
        subtitulo: 'Más de 20 marcas mundiales',
        contenido:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        imagen: 'assets/img/red.png',
        botones: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: 'http://cdn.onlinewebfonts.com/svg/img_97521.png',
            imgCheck: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg'
          },
          {
            estilo: 2,
            contenido: 'aplisaber',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: 'http://cdn.onlinewebfonts.com/svg/img_97521.png',
            imgCheck: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg'
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: 'http://cdn.onlinewebfonts.com/svg/img_97521.png',
            imgCheck: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg'
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: 'http://cdn.onlinewebfonts.com/svg/img_97521.png',
            imgCheck: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg'
          },
          {
            estilo: 2,
            contenido: 'electus',
            background: 'var(--main-red)',
            color: 'white',
            img:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/1280px-PlayStation_logo.svg.png',
            imgIcono: 'http://cdn.onlinewebfonts.com/svg/img_97521.png',
            imgCheck: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg'
          }
        ],
        informacion: [
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
        nombre: 'Realidad aumentada 2',
        id: 'realidad-aumentada',
        subtitulo: 'Más de 20 marcas mundiales',
        contenido:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        imagen: 'assets/img/red.png',
        botones: [
          {
            estilo: 2,
            contenido: 'Reality app',
            background: '#303030',
            color: 'white',
            imgIcono: 'http://cdn.onlinewebfonts.com/svg/img_97521.png',
            imgCheck: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg'
          },
          {
            estilo: 2,
            contenido: 'sasda',
            background: 'var(--main-red)',
            color: 'white',
            imgIcono: 'http://cdn.onlinewebfonts.com/svg/img_97521.png',
            imgCheck: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg'
          },
          {
            estilo: 2,
            contenido: 'sitgan',
            background: '#F8F8F8',
            color: 'black',
            imgIcono: 'http://cdn.onlinewebfonts.com/svg/img_97521.png',
            imgCheck: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Check_green_icon.svg'
          }
        ],
        informacion: [
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
        nombre: 'Realidad aumentada 3',
        id: 'realidad-aumentada',
        subtitulo: 'Más de 20 marcas mundiales',
        contenido:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        imagen: 'assets/img/red.png',
        botones: [
          {
            estilo: 1,
            color: 'white',
            background: 'var(--main-red)',
            contenido: 'Más información',
            imgIcono: 'http://cdn.onlinewebfonts.com/svg/img_97521.png'
          }
        ],
        informacion: [
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
        nombre: 'Realidad virtual sin más',
        id: 'realidad-virtual',
        subtitulo: 'Más de 20 marcas mundiales',
        contenido:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo at modi, dolorem explicabo ratione doloribus adipisci ex, distinctio pariatur facere? Cupiditate aperiam repellendus architecto? Ipsa vitae accusantium amet ex.',
        imagen: 'assets/img/red.png',
        botones: [],
        informacion: [
          {
            estilo: 1,
            imgPrincipal: ''
          }
        ]
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
