import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FooterModule, NavbarModule, AppRoutingModule, RouterModule, GraphQLModule, HttpClientModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
