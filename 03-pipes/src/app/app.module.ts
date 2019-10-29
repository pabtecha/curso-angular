import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import {CapitalizadoPipe} from './pipes/capitalizado.pipe';
import {ContrasenyaPipe} from './pipes/password.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    ContrasenyaPipe,
    DomseguroPipe

  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
