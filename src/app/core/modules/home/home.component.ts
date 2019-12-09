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
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        }
      ]
    },
    {
      nombre: "sector público",
      clientes: [
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        }
      ]
    },
    {
      nombre: "ong's",
      clientes: [
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        },
        {
          img: "assets/img/realityapp.png"
        }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
