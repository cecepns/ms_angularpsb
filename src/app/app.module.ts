import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FasilitasComponent } from './components/fasilitas/fasilitas.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectionPathComponent } from './components/selection-path/selection-path.component';
import { FloatingMessageComponent } from './components/floating-message/floating-message.component';
import { ExcellenceComponent } from './components/excellence/excellence.component';

// LIBRARY
import { SwiperModule } from 'swiper/angular';
import { PartnerComponent } from './components/partner/partner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FasilitasComponent,
    AboutMeComponent,
    FooterComponent,
    SelectionPathComponent,
    FloatingMessageComponent,
    ExcellenceComponent,
    PartnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
