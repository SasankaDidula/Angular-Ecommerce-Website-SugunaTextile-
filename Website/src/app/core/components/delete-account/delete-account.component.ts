import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor(public authService: AuthService,
    public router: Router,
    public ngZone: NgZone) { }

  ngOnInit() {
  }

}
