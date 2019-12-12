import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NosotrosComponent } from "./nosotros.component";
import { SectorModule } from "src/app/shared/components/sector/sector.module";

@NgModule({
  declarations: [NosotrosComponent],
  imports: [CommonModule, SectorModule],
  exports: [NosotrosComponent]
})
export class NosotrosModule {}
