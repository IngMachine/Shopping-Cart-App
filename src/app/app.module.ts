import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import en from '@angular/common/locales/en';

// Formularios
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// NGRX
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


// AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Lenguajes
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';

// Módulo de los componentes de NgZorro
import { NgZorroModule } from './ngZorro/ngzorro.module';

// Módulos personalizados
import { AuthModule } from './auth/auth.module';
import { appReducers } from './store/app.reducers';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Formularios Reactivos
    ReactiveFormsModule,
    HttpClientModule,
    // AngularFire
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // NGRX
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    // Módulo de componentes utilizado por ngZorro
    NgZorroModule,
    // Rutas
    AppRoutingModule,
    // Módulos personalizados
    AuthModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
