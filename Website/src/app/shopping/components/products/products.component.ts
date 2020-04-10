import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/products';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { switchMap } from 'rxjs/operators';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService
  ) { }

  async ngOnInit() {
    this.cart$ = (await this.shoppingCartService.getCart());
    this.populateProduct();
  }

  private populateProduct(){
    this.productService
    .getAll()
    .pipe(switchMap(products => {
      this.products =products;
      return this.route.queryParamMap;
    }))
    .subscribe(params => {
      this.category = params.get('categories');
      this.applyFilter();
      
    })
  }

  private applyFilter(){
    this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category): 
      this.products;
  }

}
