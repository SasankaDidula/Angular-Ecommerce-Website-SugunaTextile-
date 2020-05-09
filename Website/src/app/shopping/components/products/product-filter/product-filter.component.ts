import { CategoryService } from '../../../../shared/services/category.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';


@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  
  categories$;
  products: Products[] = [];
  filteredProducts: Products[] = [];

  @Input('category') category: string;

  constructor(
    route:ActivatedRoute,
    categoryService: CategoryService,
    productService: ProductsService,) {
    this.categories$ = categoryService.getCategories();
    productService.getAll().subscribe(products => this.products = this.products);

      this.categories$ = categoryService.getCategories();

      route.queryParamMap.subscribe(params => {
        this.category = params.get('categories');

        this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category): 
        this.products;
      });
  }

  ngOnInit() {
  }

}
