import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {AuthService} from './services/authentification/auth.service';
import {AuthentificationGuard} from './guards/authentification.guard';
import { MenuComponent } from './menu/menu.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import {EtudiantsService} from './services/etudiants/etudiants.service';
import { EditComponent } from './etudiants/edition/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConnexionComponent,
    MenuComponent,
    EtudiantsComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthentificationGuard, EtudiantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
