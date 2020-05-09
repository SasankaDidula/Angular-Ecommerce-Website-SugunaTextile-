import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { Products } from '../../../shared/models/products';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products$: Observable<any[]>;
  products: Products[] = [];

  constructor(private productService: ProductsService, private cartService: ShoppingCartService) {
    this.products$ = this.productService.getAll();
    this.products$.subscribe(products => {
        this.products = products
    })
   }

  ngOnInit() {
  }

  addToCart(product: Products){
    this.cartService.addToCart(product);
  }

}


