import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { Observable } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SizesService } from 'src/app/shared/services/sizes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: Observable<any[]>;
  sizes$: Observable<any[]>;

  constructor(categoryService: CategoryService, 
    private productService: ProductsService, 
    private router: Router,
    private sizesService: SizesService) { 
    this.categories$ = categoryService.getCategories();
    this.sizes$ = sizesService.getSizes();

  }

  ngOnInit(): void {
  }


  save(product: any){
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  
  demo() {
    this.productService.form.setValue({
      $key: null,
      title: 'Short Sleeve Cuban Shirt',
      price: '2000',
      category: '',
      size: '',
      quantity: '10',
      imageUrl: 'https://www.surfstitch.com/on/demandware.static/-/Sites-ss-master-catalog/default/dwb4490f9a/images/WSM0967HMS/HUMUS-MENS-CLOTHING-RUSTY-SHIRTS-WSM0967HMS_1.JPG',
      Date: '22.05.2020',
    })
  }

}
