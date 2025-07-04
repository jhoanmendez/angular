import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
//import { provideRouter } from '@angular/router';
//import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; //se agrega
//import { providePrimeNG } from 'primeng/config';
//import Aura from '@primeng/themes/aura';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    /*provideRouter(routes), provideAnimationsAsync(), providePrimeNG({theme: {preset: Aura}})*/
  importProvidersFrom(BrowserAnimationsModule, BrowserModule)
  ]
};