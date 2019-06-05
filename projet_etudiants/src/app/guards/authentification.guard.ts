import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/authentification/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate, CanLoad {
  constructor(public authentification: AuthService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authentification.authentifie) {
      return true;
    } else {
      this.router.navigate(['connexion']);
      return false;
    }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authentification.authentifie) {
      return true;
    } else {
      this.router.navigate(['connexion']);
      return false;
    }
  }
}
