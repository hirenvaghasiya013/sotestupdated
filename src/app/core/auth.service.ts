import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router ) { }

  navigateToWeb(){
    this.router.navigate(['dashboard/questions']);
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }
}
