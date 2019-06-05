import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {AuthentificationGuard} from './guards/authentification.guard';
import {EtudiantsComponent} from './etudiants/etudiants.component';
import {EditComponent} from './etudiants/edition/edit.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'etudiants', component: EtudiantsComponent, canActivate: [AuthentificationGuard]},
  {path: 'etudiants/edition/:id', component: EditComponent, canActivate: [AuthentificationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
