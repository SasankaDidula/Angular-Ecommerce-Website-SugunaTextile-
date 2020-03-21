import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Appuser } from '../models/app-user';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{

  appUser: Appuser;
  cart$: Observable<ShoppingCart>;

  constructor(private auth: AuthService, private router: Router, private shoppingcartService: ShoppingCartService) {
    
   }

   async ngOnInit(){
    this.auth.appUsers$.subscribe(appUser => this.appUser = appUser);

    this.cart$ = (await this.shoppingcartService.getCart()).valueChanges();
    this.cart$.subscribe(value => {
      console.log(value.totalItemsCount)
    })
   }

   logout() {
    this.auth.logout();
    window.location.reload()
  }

}
