import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SectorModule } from 'src/app/shared/components/sector/sector.module';
import { DevelopmentCardModule } from 'src/app/shared/components/development-card/development-card.module';
import { HeroModule } from './hero/hero.module';
import { CarouselWithItemModule } from 'src/app/shared/components/carousel-with-item/carousel-with-item.module';
import { CarouselWithTileModule } from 'src/app/shared/components/carousel-with-tile/carousel-with-tile.module';
import { SectionWithCarousel1Module } from 'src/app/shared/components/sections/section-with-carousel1/section-with-carousel1.module';
import { SectionWithCarousel2Module } from 'src/app/shared/components/sections/section-with-carousel2/section-with-carousel2.module';
import { SectionWithScrollModule } from 'src/app/shared/components/sections/section-with-scroll/section-with-scroll.module';
import { SectionWithMultipleSubsectionModule } from 'src/app/shared/components/sections/section-with-multiple-subsection/section-with-multiple-subsection.module';
import { SectionSimpleModule } from 'src/app/shared/components/sections/section-simple/section-simple.module';
import { JoinUsModule } from './join-us/join-us.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselWithItemModule,
    CarouselWithTileModule,
    SectionWithCarousel1Module,
    SectionWithCarousel2Module,
    SectionWithScrollModule,
    SectionWithMultipleSubsectionModule,
    SectionSimpleModule,
    SectorModule,
    DevelopmentCardModule,
    HeroModule,
    JoinUsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
