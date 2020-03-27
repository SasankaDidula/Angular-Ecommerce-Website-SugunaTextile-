import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../../models/products';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent{
  @Input('product') product: Products;
  @Input('shopping-cart') shoppingCart;

  constructor(private cartService: ShoppingCartService) {}

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }

}
