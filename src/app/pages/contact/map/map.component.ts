import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

/**
 * Componente encargado de renderizar el mapa y localizar el geopunto que le llegue desde un componente padre o que tenga
 * por defecto.
 */
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  API_KEY = 'pk.eyJ1IjoiZGllZ285NDk3IiwiYSI6ImNrNWdtZWVyMDA5ZmUzcXMxZXJ6cGF2YzEifQ.mV6YjKmlf3dlqCv1SJW9rQ';

  constructor() {}

  ngOnInit() {
    mapboxgl.accessToken = this.API_KEY;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.6566408, 4.1565567],
      zoom: 17.4
    });
    const marker = new mapboxgl.Marker({
      draggable: false
    })
      .setLngLat([-73.6566408, 4.1565567])
      .addTo(map);
  }
}
