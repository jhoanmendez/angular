import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
//import { provideRouter } from '@angular/router';
//import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; //se agrega
//import { providePrimeNG } from 'primeng/config';
//import Aura from '@primeng/themes/aura';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    /*provideRouter(routes), provideAnimationsAsync(), providePrimeNG({theme: {preset: Aura}})*/
  importProvidersFrom(BrowserAnimationsModule, BrowserModule), 
   provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura, // Puedes cambiar a Lara si lo prefieres
                options: {
                    prefix: 'p',
                    darkModeSelector: 'false',
                    cssLayer: false
                }
            }
        })
  ]
};