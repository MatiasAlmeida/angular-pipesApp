import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Configuración del locale de la app
import localeEsHN from '@angular/common/locales/es-HN'; // asi se importan individualmente los formatos
// de idioma por país para mostrar la información
import localeFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

// necesitamos importar esta función en particular y cargarla con las variables que importamos arriba
registerLocaleData( localeEsHN );
registerLocaleData( localeFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-HN' } // establece el formato local por defecto para toda la aplicación
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
