import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeModule } from './core/modules/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { NosotrosModule } from './core/modules/nosotros/nosotros.module';
import { RouterModule } from '@angular/router';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { InnovacionModule } from './core/modules/innovacion/innovacion.module';
import { SoftwareModule } from './core/modules/software/software.module';
import { HardwareModule } from './core/modules/hardware/hardware.module';
import { ProjectsModule } from './core/modules/projects/projects.module';
import { TrainingModule } from './core/modules/training/training.module';
import { PaginaComponent } from './prueba/pagina/pagina.component';
import { Componente1Component } from './prueba/componente1/componente1.component';
import { Componente2Component } from './prueba/componente2/componente2.component';
import { Componente3Component } from './prueba/componente3/componente3.component';
import { SectionWithCarousel1Component } from './shared/components/section-with-carousel1/section-with-carousel1.component';
import { CarouselWithItemComponent } from './shared/components/carousel-with-item/carousel-with-item.component';
import { CarouselWithTileComponent } from './shared/components/carousel-with-tile/carousel-with-tile.component';
import { SectionWithCarousel2Component } from './shared/components/section-with-carousel2/section-with-carousel2.component';
import { SectionWithScrollComponent } from './shared/components/section-with-scroll/section-with-scroll.component';
import { SectionWithMultipleSubsectionComponent } from './shared/components/section-with-multiple-subsection/section-with-multiple-subsection.component';
import { SectionSimpleComponent } from './shared/components/section-simple/section-simple.component';
import { CardDarkComponent } from './shared/components/card-dark/card-dark.component';
import { CardLogoComponent } from './shared/components/card-logo/card-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PaginaComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component
  ],
  imports: [
    BrowserModule,
    HomeModule,
    NosotrosModule,
    InnovacionModule,
    SoftwareModule,
    HardwareModule,
    ProjectsModule,
    TrainingModule,
    NavbarModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
