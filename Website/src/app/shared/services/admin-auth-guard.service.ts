import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { Appuser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth:AuthService, private userService: UserService) { }

  canActivate():Observable<boolean> {
    return this.auth.appUsers$
    .pipe(map(appUser => appUser.isAdmin));
  }
}
