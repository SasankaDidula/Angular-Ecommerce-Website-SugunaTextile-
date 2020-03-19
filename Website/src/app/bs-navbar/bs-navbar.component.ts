import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Appuser } from '../models/app-user';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{

  appUser: Appuser;
  shoppingCartItemCount: number;

  constructor(private auth: AuthService, private router: Router, private shoppingcartService: ShoppingCartService) {
    
   }

   async ngOnInit(){
    this.auth.appUsers$.subscribe(appUser => this.appUser = appUser);

    let cart$ = await this.shoppingcartService.getCart();
    cart$.valueChanges().subscribe(cart =>{
      this.shoppingCartItemCount = 0;
      for ( let productId in cart.items)
        this.shoppingCartItemCount += cart.items[productId].quantity;
    });
   }

   logout() {
    this.auth.logout();
    window.location.reload()
  }

}
