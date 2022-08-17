import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LogInService } from './log-in.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor (private logInService: LogInService, private rutas: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let currentUser=this.logInService.UsuarioAutenticado;
    if (currentUser && currentUser.accesToken)
    {
      return true; 
    }
    else
    {
      this.rutas.navigate(['/login']);
      return false;
    }
  }

}