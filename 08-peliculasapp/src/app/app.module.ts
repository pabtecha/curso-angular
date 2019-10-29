import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { MoviesService } from './providers/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTING } from './app.routes';
import { TmdbImagePipe } from './pipes/tmdb-image.pipe';
import { CardComponent } from './components/card/card.component';
import { CarouselCardsComponent } from './components/carousel-cards/carousel-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    NavbarComponent,
    TmdbImagePipe,
    CardComponent,
    CarouselCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
