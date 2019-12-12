import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tarjeta-capacidad",
  templateUrl: "./tarjeta-capacidad.component.html",
  styleUrls: ["./tarjeta-capacidad.component.css"]
})
export class TarjetaCapacidadComponent implements OnInit {
  @Input() capacidad: any;

  constructor() {}
  ngOnInit() {}
}
