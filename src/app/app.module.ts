import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { MapComponent } from './core/modules/contact/map/map.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooterModule, NavbarModule, AppRoutingModule, RouterModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
