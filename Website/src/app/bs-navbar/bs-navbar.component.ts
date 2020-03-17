import { Component} from '@angular/core';
import { AuthService } from '../auth.service';
import { Appuser } from '../models/app-user';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  appUser: Appuser;

  constructor(private auth: AuthService, private router: Router) {
    auth.appUsers$.subscribe(appUser => this.appUser = appUser);
   }

   logout() {
    this.auth.logout();
    window.location.reload()
  }

}
