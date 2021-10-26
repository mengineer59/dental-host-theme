import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel'; 

//Font awesome modules
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee, fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SocialBarComponent } from './social-bar/social-bar.component';
import { CarouselBarComponent } from './carousel-bar/carousel-bar.component';
import { OurServicesBarComponent } from './our-services-bar/our-services-bar.component';
import { IntroductionBarComponent } from './introduction-bar/introduction-bar.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { GalleryBarComponent } from './gallery-bar/gallery-bar.component';
import { ParallaxBarComponent } from './parallax-bar/parallax-bar.component';
import { OurTeamBarComponent } from './our-team-bar/our-team-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { CopyrightBarComponent } from './copyright-bar/copyright-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderBarComponent,
    SocialBarComponent,
    CarouselBarComponent,
    OurServicesBarComponent,
    IntroductionBarComponent,
    TitleBarComponent,
    GalleryBarComponent,
    ParallaxBarComponent,
    OurTeamBarComponent,
    FooterBarComponent,
    CopyrightBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIconPacks(far);
    library.addIconPacks(fab);
    library.addIcons(faCoffee);
  }
}
