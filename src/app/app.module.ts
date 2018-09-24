import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import localeIt from '@angular/common/locales/it';
import { registerLocaleData } from '@angular/common';

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

registerLocaleData(localeIt);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
