import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import {HomeModule} from './core/modules/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { ClientCardComponent } from './shared/components/client-card/client-card.component';
import { SectorComponent } from './shared/components/sector/sector.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
