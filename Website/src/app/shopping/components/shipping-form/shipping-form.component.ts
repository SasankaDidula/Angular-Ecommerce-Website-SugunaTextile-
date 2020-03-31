import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { OrderService } from '../../../order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Order } from '../../../shared/models/order';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { FormGroup, FormControl, Validators,} from '@angular/forms';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping: any = {};
  payment: any = {};
  userSubscription: Subscription;
  userId: string;
  mobNumberPattern = "^((\\+94-?)|0)?[0-9]{9}$"; 

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user$.subscribe(user =>this.userId = user.uid)
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  async placeOrder(){
    let order = new Order(this.userId, this.shipping, this.cart, this.payment);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success/', result.key]);
  }

}
