import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HomeModule } from "./core/modules/home/home.module";
import { AppRoutingModule } from "./app-routing.module";
import { NosotrosModule } from "./core/modules/nosotros/nosotros.module";
import { RouterModule } from "@angular/router";
import { GridSeeMoreComponent } from './shared/components/grid-see-more/grid-see-more.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, GridSeeMoreComponent],
  imports: [
    BrowserModule,
    HomeModule,
    NosotrosModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
