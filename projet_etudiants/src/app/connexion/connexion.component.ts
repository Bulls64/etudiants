import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/authentification/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  login;
  constructor(public authentification: AuthService, public router: Router) { }

  ngOnInit() {
    this.login = {user: '', password: ''};
  }

  submitAuth() {
    this.authentification.authentifie = true;
    this.router.navigate(['']);
  }
}
