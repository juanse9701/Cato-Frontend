import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-development-card",
  templateUrl: "./development-card.component.html",
  styleUrls: ["./development-card.component.css"]
})
export class DevelopmentCardComponent implements OnInit {
  @Input() description: string;
  @Input() client: string;
  @Input() img: string;
  constructor() {}

  ngOnInit() {}
}
