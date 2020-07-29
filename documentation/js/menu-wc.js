'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ejercicio-uno documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e8956902f48122d3be130c845c25fca0"' : 'data-target="#xs-components-links-module-AppModule-e8956902f48122d3be130c845c25fca0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e8956902f48122d3be130c845c25fca0"' :
                                            'id="xs-components-links-module-AppModule-e8956902f48122d3be130c845c25fca0"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CardCarouselItemModule.html" data-type="entity-link">CardCarouselItemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardCarouselItemModule-a9ba5f65bcdc9d3fbf5104ba5a2173fc"' : 'data-target="#xs-components-links-module-CardCarouselItemModule-a9ba5f65bcdc9d3fbf5104ba5a2173fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardCarouselItemModule-a9ba5f65bcdc9d3fbf5104ba5a2173fc"' :
                                            'id="xs-components-links-module-CardCarouselItemModule-a9ba5f65bcdc9d3fbf5104ba5a2173fc"' }>
                                            <li class="link">
                                                <a href="components/CardCarouselItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardCarouselItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardCarouselTileModule.html" data-type="entity-link">CardCarouselTileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardCarouselTileModule-90f12fff8b8cfbb560eb46e11b3ce2a9"' : 'data-target="#xs-components-links-module-CardCarouselTileModule-90f12fff8b8cfbb560eb46e11b3ce2a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardCarouselTileModule-90f12fff8b8cfbb560eb46e11b3ce2a9"' :
                                            'id="xs-components-links-module-CardCarouselTileModule-90f12fff8b8cfbb560eb46e11b3ce2a9"' }>
                                            <li class="link">
                                                <a href="components/CardCarouselTileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardCarouselTileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardColorModule.html" data-type="entity-link">CardColorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardColorModule-4f52f16af0658f1019633da25477f769"' : 'data-target="#xs-components-links-module-CardColorModule-4f52f16af0658f1019633da25477f769"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardColorModule-4f52f16af0658f1019633da25477f769"' :
                                            'id="xs-components-links-module-CardColorModule-4f52f16af0658f1019633da25477f769"' }>
                                            <li class="link">
                                                <a href="components/CardColorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardColorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardDarkModule.html" data-type="entity-link">CardDarkModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardDarkModule-3108ea73c9731107bf3caa2dbdd866c2"' : 'data-target="#xs-components-links-module-CardDarkModule-3108ea73c9731107bf3caa2dbdd866c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardDarkModule-3108ea73c9731107bf3caa2dbdd866c2"' :
                                            'id="xs-components-links-module-CardDarkModule-3108ea73c9731107bf3caa2dbdd866c2"' }>
                                            <li class="link">
                                                <a href="components/CardDarkComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardDarkComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardLogoModule.html" data-type="entity-link">CardLogoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardLogoModule-932e8212d854ffaffa5b2ab2633c5a9d"' : 'data-target="#xs-components-links-module-CardLogoModule-932e8212d854ffaffa5b2ab2633c5a9d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardLogoModule-932e8212d854ffaffa5b2ab2633c5a9d"' :
                                            'id="xs-components-links-module-CardLogoModule-932e8212d854ffaffa5b2ab2633c5a9d"' }>
                                            <li class="link">
                                                <a href="components/CardLogoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardLogoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CarouselMediaModule.html" data-type="entity-link">CarouselMediaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CarouselMediaModule-3beb2a541d595011b23f2aead6df97f0"' : 'data-target="#xs-components-links-module-CarouselMediaModule-3beb2a541d595011b23f2aead6df97f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CarouselMediaModule-3beb2a541d595011b23f2aead6df97f0"' :
                                            'id="xs-components-links-module-CarouselMediaModule-3beb2a541d595011b23f2aead6df97f0"' }>
                                            <li class="link">
                                                <a href="components/CarouselMediaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarouselMediaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CarouselWithItemModule.html" data-type="entity-link">CarouselWithItemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CarouselWithItemModule-8e9cf052f3481f9626bbb0139a9b7c1e"' : 'data-target="#xs-components-links-module-CarouselWithItemModule-8e9cf052f3481f9626bbb0139a9b7c1e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CarouselWithItemModule-8e9cf052f3481f9626bbb0139a9b7c1e"' :
                                            'id="xs-components-links-module-CarouselWithItemModule-8e9cf052f3481f9626bbb0139a9b7c1e"' }>
                                            <li class="link">
                                                <a href="components/CarouselWithItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarouselWithItemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CarouselWithTileModule.html" data-type="entity-link">CarouselWithTileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CarouselWithTileModule-acf5713881ffa7fbcb8cbac20f1e082e"' : 'data-target="#xs-components-links-module-CarouselWithTileModule-acf5713881ffa7fbcb8cbac20f1e082e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CarouselWithTileModule-acf5713881ffa7fbcb8cbac20f1e082e"' :
                                            'id="xs-components-links-module-CarouselWithTileModule-acf5713881ffa7fbcb8cbac20f1e082e"' }>
                                            <li class="link">
                                                <a href="components/CarouselWithTileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarouselWithTileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatoModule.html" data-type="entity-link">CatoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CatoModule-adb71719eb98b4f0af3e55e5e2b6cbd2"' : 'data-target="#xs-components-links-module-CatoModule-adb71719eb98b4f0af3e55e5e2b6cbd2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CatoModule-adb71719eb98b4f0af3e55e5e2b6cbd2"' :
                                            'id="xs-components-links-module-CatoModule-adb71719eb98b4f0af3e55e5e2b6cbd2"' }>
                                            <li class="link">
                                                <a href="components/CatoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CatoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatoRoutingModule.html" data-type="entity-link">CatoRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CollapsibleModule.html" data-type="entity-link">CollapsibleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CollapsibleModule-8dc711df0ee4ef84352d140637487c8c"' : 'data-target="#xs-components-links-module-CollapsibleModule-8dc711df0ee4ef84352d140637487c8c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CollapsibleModule-8dc711df0ee4ef84352d140637487c8c"' :
                                            'id="xs-components-links-module-CollapsibleModule-8dc711df0ee4ef84352d140637487c8c"' }>
                                            <li class="link">
                                                <a href="components/CollapsibleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CollapsibleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link">ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContactModule-9a85300624b86c6a2301e9183dfa9368"' : 'data-target="#xs-components-links-module-ContactModule-9a85300624b86c6a2301e9183dfa9368"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContactModule-9a85300624b86c6a2301e9183dfa9368"' :
                                            'id="xs-components-links-module-ContactModule-9a85300624b86c6a2301e9183dfa9368"' }>
                                            <li class="link">
                                                <a href="components/ContactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DevelopmentCardModule.html" data-type="entity-link">DevelopmentCardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DevelopmentCardModule-b15bbe04ab8f3f10c095afbde4a10ec3"' : 'data-target="#xs-components-links-module-DevelopmentCardModule-b15bbe04ab8f3f10c095afbde4a10ec3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DevelopmentCardModule-b15bbe04ab8f3f10c095afbde4a10ec3"' :
                                            'id="xs-components-links-module-DevelopmentCardModule-b15bbe04ab8f3f10c095afbde4a10ec3"' }>
                                            <li class="link">
                                                <a href="components/DevelopmentCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DevelopmentCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FooterModule.html" data-type="entity-link">FooterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FooterModule-6ce6b435c0f102d5794e089470ff94e8"' : 'data-target="#xs-components-links-module-FooterModule-6ce6b435c0f102d5794e089470ff94e8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FooterModule-6ce6b435c0f102d5794e089470ff94e8"' :
                                            'id="xs-components-links-module-FooterModule-6ce6b435c0f102d5794e089470ff94e8"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GraphQLModule.html" data-type="entity-link">GraphQLModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HeroModule.html" data-type="entity-link">HeroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HeroModule-e4b2a2fd773256cd2c2cc040ecb6c6e4"' : 'data-target="#xs-components-links-module-HeroModule-e4b2a2fd773256cd2c2cc040ecb6c6e4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HeroModule-e4b2a2fd773256cd2c2cc040ecb6c6e4"' :
                                            'id="xs-components-links-module-HeroModule-e4b2a2fd773256cd2c2cc040ecb6c6e4"' }>
                                            <li class="link">
                                                <a href="components/HeroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-6e1974a9675abb7eb6fe1fccee3114af"' : 'data-target="#xs-components-links-module-HomeModule-6e1974a9675abb7eb6fe1fccee3114af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-6e1974a9675abb7eb6fe1fccee3114af"' :
                                            'id="xs-components-links-module-HomeModule-6e1974a9675abb7eb6fe1fccee3114af"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Image360Module.html" data-type="entity-link">Image360Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Image360Module-472eea4edf4b5dcc4d8d9cc45ae1e8cf"' : 'data-target="#xs-components-links-module-Image360Module-472eea4edf4b5dcc4d8d9cc45ae1e8cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Image360Module-472eea4edf4b5dcc4d8d9cc45ae1e8cf"' :
                                            'id="xs-components-links-module-Image360Module-472eea4edf4b5dcc4d8d9cc45ae1e8cf"' }>
                                            <li class="link">
                                                <a href="components/Image360Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Image360Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JoinUsModule.html" data-type="entity-link">JoinUsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-JoinUsModule-ea54e3e7ce9371ddb36422e319cd99c8"' : 'data-target="#xs-components-links-module-JoinUsModule-ea54e3e7ce9371ddb36422e319cd99c8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JoinUsModule-ea54e3e7ce9371ddb36422e319cd99c8"' :
                                            'id="xs-components-links-module-JoinUsModule-ea54e3e7ce9371ddb36422e319cd99c8"' }>
                                            <li class="link">
                                                <a href="components/JoinUsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JoinUsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MapModule.html" data-type="entity-link">MapModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MapModule-9c509aa2931deaf2ed8ae7a8057d64ac"' : 'data-target="#xs-components-links-module-MapModule-9c509aa2931deaf2ed8ae7a8057d64ac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MapModule-9c509aa2931deaf2ed8ae7a8057d64ac"' :
                                            'id="xs-components-links-module-MapModule-9c509aa2931deaf2ed8ae7a8057d64ac"' }>
                                            <li class="link">
                                                <a href="components/MapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavbarModule.html" data-type="entity-link">NavbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavbarModule-f259133ac0edcc0c66109c03a69222c6"' : 'data-target="#xs-components-links-module-NavbarModule-f259133ac0edcc0c66109c03a69222c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavbarModule-f259133ac0edcc0c66109c03a69222c6"' :
                                            'id="xs-components-links-module-NavbarModule-f259133ac0edcc0c66109c03a69222c6"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SelectLanguageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectLanguageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NosotrosModule.html" data-type="entity-link">NosotrosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NosotrosModule-2d378aa4bfbde4f138037efce29f025c"' : 'data-target="#xs-components-links-module-NosotrosModule-2d378aa4bfbde4f138037efce29f025c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NosotrosModule-2d378aa4bfbde4f138037efce29f025c"' :
                                            'id="xs-components-links-module-NosotrosModule-2d378aa4bfbde4f138037efce29f025c"' }>
                                            <li class="link">
                                                <a href="components/NosotrosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NosotrosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PageLayoutModule.html" data-type="entity-link">PageLayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PageLayoutModule-b8295c359e42124b8092f2e3fb303a34"' : 'data-target="#xs-components-links-module-PageLayoutModule-b8295c359e42124b8092f2e3fb303a34"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PageLayoutModule-b8295c359e42124b8092f2e3fb303a34"' :
                                            'id="xs-components-links-module-PageLayoutModule-b8295c359e42124b8092f2e3fb303a34"' }>
                                            <li class="link">
                                                <a href="components/PageLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageLayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionSimple2Module.html" data-type="entity-link">SectionSimple2Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionSimple2Module-7ed0588fc849a1cd5224a5a61b47fd4b"' : 'data-target="#xs-components-links-module-SectionSimple2Module-7ed0588fc849a1cd5224a5a61b47fd4b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionSimple2Module-7ed0588fc849a1cd5224a5a61b47fd4b"' :
                                            'id="xs-components-links-module-SectionSimple2Module-7ed0588fc849a1cd5224a5a61b47fd4b"' }>
                                            <li class="link">
                                                <a href="components/SectionSimple2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionSimple2Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionSimpleModule.html" data-type="entity-link">SectionSimpleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionSimpleModule-c57fc6a23a1dbc09b2e47c783c7f4c98"' : 'data-target="#xs-components-links-module-SectionSimpleModule-c57fc6a23a1dbc09b2e47c783c7f4c98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionSimpleModule-c57fc6a23a1dbc09b2e47c783c7f4c98"' :
                                            'id="xs-components-links-module-SectionSimpleModule-c57fc6a23a1dbc09b2e47c783c7f4c98"' }>
                                            <li class="link">
                                                <a href="components/SectionSimpleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionSimpleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionTextGridModule.html" data-type="entity-link">SectionTextGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionTextGridModule-9d059b8b2f77f433cfe15749ffef3687"' : 'data-target="#xs-components-links-module-SectionTextGridModule-9d059b8b2f77f433cfe15749ffef3687"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionTextGridModule-9d059b8b2f77f433cfe15749ffef3687"' :
                                            'id="xs-components-links-module-SectionTextGridModule-9d059b8b2f77f433cfe15749ffef3687"' }>
                                            <li class="link">
                                                <a href="components/SectionTextGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionTextGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionWithCarousel1Module.html" data-type="entity-link">SectionWithCarousel1Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionWithCarousel1Module-e6b451f7729d0b0f7f3ec7f484282f08"' : 'data-target="#xs-components-links-module-SectionWithCarousel1Module-e6b451f7729d0b0f7f3ec7f484282f08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionWithCarousel1Module-e6b451f7729d0b0f7f3ec7f484282f08"' :
                                            'id="xs-components-links-module-SectionWithCarousel1Module-e6b451f7729d0b0f7f3ec7f484282f08"' }>
                                            <li class="link">
                                                <a href="components/SectionWithCarousel1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionWithCarousel1Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionWithCarousel2Module.html" data-type="entity-link">SectionWithCarousel2Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionWithCarousel2Module-72097b604ef2fbdb84307d780b1d4d9f"' : 'data-target="#xs-components-links-module-SectionWithCarousel2Module-72097b604ef2fbdb84307d780b1d4d9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionWithCarousel2Module-72097b604ef2fbdb84307d780b1d4d9f"' :
                                            'id="xs-components-links-module-SectionWithCarousel2Module-72097b604ef2fbdb84307d780b1d4d9f"' }>
                                            <li class="link">
                                                <a href="components/SectionWithCarousel2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionWithCarousel2Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionWithCollapsibleGridModule.html" data-type="entity-link">SectionWithCollapsibleGridModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionWithCollapsibleGridModule-efc5623d1b396a6c6bbc5fb0c37d2b06"' : 'data-target="#xs-components-links-module-SectionWithCollapsibleGridModule-efc5623d1b396a6c6bbc5fb0c37d2b06"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionWithCollapsibleGridModule-efc5623d1b396a6c6bbc5fb0c37d2b06"' :
                                            'id="xs-components-links-module-SectionWithCollapsibleGridModule-efc5623d1b396a6c6bbc5fb0c37d2b06"' }>
                                            <li class="link">
                                                <a href="components/SectionWithCollapsibleGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionWithCollapsibleGridComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionWithCollapsibleModule.html" data-type="entity-link">SectionWithCollapsibleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionWithCollapsibleModule-762972710567e5b0a80420aab0189803"' : 'data-target="#xs-components-links-module-SectionWithCollapsibleModule-762972710567e5b0a80420aab0189803"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionWithCollapsibleModule-762972710567e5b0a80420aab0189803"' :
                                            'id="xs-components-links-module-SectionWithCollapsibleModule-762972710567e5b0a80420aab0189803"' }>
                                            <li class="link">
                                                <a href="components/SectionWithCollapsibleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionWithCollapsibleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionWithMultipleSubsectionModule.html" data-type="entity-link">SectionWithMultipleSubsectionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionWithMultipleSubsectionModule-40db78205b7c9b34308a0614dd35697f"' : 'data-target="#xs-components-links-module-SectionWithMultipleSubsectionModule-40db78205b7c9b34308a0614dd35697f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionWithMultipleSubsectionModule-40db78205b7c9b34308a0614dd35697f"' :
                                            'id="xs-components-links-module-SectionWithMultipleSubsectionModule-40db78205b7c9b34308a0614dd35697f"' }>
                                            <li class="link">
                                                <a href="components/SectionWithMultipleSubsectionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionWithMultipleSubsectionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectionWithScrollModule.html" data-type="entity-link">SectionWithScrollModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectionWithScrollModule-5ae9275932a088ec27aedf5e95cb3312"' : 'data-target="#xs-components-links-module-SectionWithScrollModule-5ae9275932a088ec27aedf5e95cb3312"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectionWithScrollModule-5ae9275932a088ec27aedf5e95cb3312"' :
                                            'id="xs-components-links-module-SectionWithScrollModule-5ae9275932a088ec27aedf5e95cb3312"' }>
                                            <li class="link">
                                                <a href="components/SectionWithScrollComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionWithScrollComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SectorModule.html" data-type="entity-link">SectorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SectorModule-38f934cbc8dc870a756622acbf5a793e"' : 'data-target="#xs-components-links-module-SectorModule-38f934cbc8dc870a756622acbf5a793e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SectorModule-38f934cbc8dc870a756622acbf5a793e"' :
                                            'id="xs-components-links-module-SectorModule-38f934cbc8dc870a756622acbf5a793e"' }>
                                            <li class="link">
                                                <a href="components/SectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubMenuModule.html" data-type="entity-link">SubMenuModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SubMenuModule-6ac920217a1a2d6fa8f17c77679e56a5"' : 'data-target="#xs-components-links-module-SubMenuModule-6ac920217a1a2d6fa8f17c77679e56a5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubMenuModule-6ac920217a1a2d6fa8f17c77679e56a5"' :
                                            'id="xs-components-links-module-SubMenuModule-6ac920217a1a2d6fa8f17c77679e56a5"' }>
                                            <li class="link">
                                                <a href="components/SubMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TechLinesPageModule.html" data-type="entity-link">TechLinesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TechLinesPageModule-cd8e07cc99ae1f9ec54ade067e414061"' : 'data-target="#xs-components-links-module-TechLinesPageModule-cd8e07cc99ae1f9ec54ade067e414061"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TechLinesPageModule-cd8e07cc99ae1f9ec54ade067e414061"' :
                                            'id="xs-components-links-module-TechLinesPageModule-cd8e07cc99ae1f9ec54ade067e414061"' }>
                                            <li class="link">
                                                <a href="components/TechLinesPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TechLinesPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/YoutubeVideoModule.html" data-type="entity-link">YoutubeVideoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-YoutubeVideoModule-2b767b7ff44dcfcfa7d5ebf84c0e15a2"' : 'data-target="#xs-components-links-module-YoutubeVideoModule-2b767b7ff44dcfcfa7d5ebf84c0e15a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-YoutubeVideoModule-2b767b7ff44dcfcfa7d5ebf84c0e15a2"' :
                                            'id="xs-components-links-module-YoutubeVideoModule-2b767b7ff44dcfcfa7d5ebf84c0e15a2"' }>
                                            <li class="link">
                                                <a href="components/YoutubeVideoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">YoutubeVideoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-YoutubeVideoModule-2b767b7ff44dcfcfa7d5ebf84c0e15a2"' : 'data-target="#xs-pipes-links-module-YoutubeVideoModule-2b767b7ff44dcfcfa7d5ebf84c0e15a2"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-YoutubeVideoModule-2b767b7ff44dcfcfa7d5ebf84c0e15a2"' :
                                            'id="xs-pipes-links-module-YoutubeVideoModule-2b767b7ff44dcfcfa7d5ebf84c0e15a2"' }>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link">ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NabvarService.html" data-type="entity-link">NabvarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PagesService.html" data-type="entity-link">PagesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Child.html" data-type="entity-link">Child</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Contact.html" data-type="entity-link">Contact</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ContactPage.html" data-type="entity-link">ContactPage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Form.html" data-type="entity-link">Form</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Gallery.html" data-type="entity-link">Gallery</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GeneralInfo.html" data-type="entity-link">GeneralInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Header.html" data-type="entity-link">Header</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Language.html" data-type="entity-link">Language</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Languages.html" data-type="entity-link">Languages</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu.html" data-type="entity-link">Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Page.html" data-type="entity-link">Page</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Section.html" data-type="entity-link">Section</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subject.html" data-type="entity-link">Subject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tag.html" data-type="entity-link">Tag</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});