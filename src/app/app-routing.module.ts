import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NosotrosComponent } from "./core/modules/nosotros/nosotros.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./core/modules/home/home.module").then(m => m.HomeModule)
  },
  {
    path: "nosotros",
    component: NosotrosComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
