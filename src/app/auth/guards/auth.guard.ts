import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanLoad {
  constructor( public authService: AuthService ) {
  }
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuth();
  }
}
