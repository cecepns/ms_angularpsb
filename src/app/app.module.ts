import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FasilitasComponent } from './components/fasilitas/fasilitas.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectionPathComponent } from './components/selection-path/selection-path.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    NavbarComponent,
    FasilitasComponent,
    AboutMeComponent,
    FooterComponent,
    SelectionPathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
