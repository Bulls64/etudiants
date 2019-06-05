import { Component } from '@angular/core';
import {AuthService} from './services/authentification/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet';
  constructor(public auth: AuthService) {}
}
