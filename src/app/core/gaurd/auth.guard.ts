import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const pathState = localStorage.getItem('token');
    if (pathState) {
      return this.navigateToLoggedOutState();
    } else{
      return this.navigateToLoggedInState();
    }
  }

  navigateToLoggedOutState() {
    this.authService.navigateToWeb();
    return false;
  }
  navigateToLoggedInState() {
    this.authService.navigateToLogin();
    return false;
  }
  
}
