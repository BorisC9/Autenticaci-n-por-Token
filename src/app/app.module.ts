import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProtegidaComponent,
    HomeComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-xv5ord5gj5x0r5es.us.auth0.com',
      clientId: 'uunuWqdnkV5PV5ZdmxZhQZELo6m6qNh3',
      authorizationParams: {
        redirect_uri: window.location.origin
      }  
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
