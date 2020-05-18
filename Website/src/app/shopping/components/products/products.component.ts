import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/shared/models/products';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { switchMap } from 'rxjs/operators';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { CategoryService } from 'src/app/shared/services/category.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  filteredProducts: Products[] = [];
  category ="";
  size="";
  cart$: Observable<ShoppingCart>;
  //cart$;
  categories$;
  sizes$;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private shoppingCartService: ShoppingCartService,
    private categoryService: CategoryService) {
      productService.getAll().subscribe(products => this.products = this.products);

      this.categories$ = categoryService.getCategories();

      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');

        this.cart();
        this.size = params.get('size');
        this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category): 
        this.products;

      });
      
   }

  async ngOnInit() {
    // this.cart$ = (await this.shoppingCartService.getCart());
    // this.populateProduct();
  }

  async cart() {
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
      // this.category = params.get('categories');
      this.category = params.get('category');
      this.applyFilter();
      
    })
  }

  private applyFilter(){
    this.filteredProducts = (this.category) ?
      this.products = this.products.filter(p => p.category === this.category): this.products;
  }

}
