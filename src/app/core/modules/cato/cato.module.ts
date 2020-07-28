import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatoRoutingModule } from './cato-routing.module';
import { CatoComponent } from './cato.component';
import { CarouselWithItemModule } from 'src/app/shared/components/carousel-with-item/carousel-with-item.module';
import { CarouselWithTileModule } from 'src/app/shared/components/carousel-with-tile/carousel-with-tile.module';
import { SectionWithCarousel1Module } from 'src/app/shared/components/section-with-carousel1/section-with-carousel1.module';
import { SectionWithCarousel2Module } from 'src/app/shared/components/section-with-carousel2/section-with-carousel2.module';
import { SectionWithScrollModule } from 'src/app/shared/components/section-with-scroll/section-with-scroll.module';
import { SectionWithMultipleSubsectionModule } from 'src/app/shared/components/section-with-multiple-subsection/section-with-multiple-subsection.module';
import { SectionSimpleModule } from 'src/app/shared/components/section-simple/section-simple.module';
import { SectorModule } from 'src/app/shared/components/sector/sector.module';
import { DevelopmentCardModule } from 'src/app/shared/components/development-card/development-card.module';
import { HeroModule } from '../home/hero/hero.module';
import { JoinUsModule } from '../home/join-us/join-us.module';
import { SectionSimple2Module } from 'src/app/shared/components/section-simple2/section-simple2.module';
import { CarouselMediaModule } from 'src/app/shared/components/carousel-media/carousel-media.module';
import { Image360Module } from 'src/app/shared/components/image360/image360.module';
import { SectionTextGridModule } from 'src/app/shared/components/section-text-grid/section-text-grid.module';
import { SectionWithCollapsibleGridModule } from 'src/app/shared/components/section-with-collapsible-grid/section-with-collapsible-grid.module';
import { SubMenuModule } from 'src/app/shared/components/sub-menu/sub-menu.module';
import { SectionWithCollapsibleModule } from 'src/app/shared/components/section-with-collapsible/section-with-collapsible.module';


@NgModule({
  declarations: [CatoComponent],
  imports: [
    CommonModule,
    CatoRoutingModule,
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
    JoinUsModule,
    SectionSimple2Module,
    CarouselMediaModule,
    Image360Module,
    SectionTextGridModule,
    SectionWithCollapsibleGridModule,
    SubMenuModule,
    SectionWithCollapsibleModule
  ]
})
export class CatoModule { }
