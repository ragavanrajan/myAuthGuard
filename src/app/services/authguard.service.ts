import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthguardService implements CanActivate  {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
  if (this.auth.isAuthenticated()) {
    console.log('Auth Guard passed');
    return true;
  }else {
    console.log('Blocked by Auth Guard');
    // this.router.navigate(['/']);
    return false;
  }

  }

}
