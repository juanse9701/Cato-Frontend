import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SectorComponent } from "./sector.component";
import { ClientCardModule } from "../client-card/client-card.module";

@NgModule({
  declarations: [SectorComponent],
  imports: [CommonModule, ClientCardModule],
  exports: [SectorComponent]
})
export class SectorModule {}
