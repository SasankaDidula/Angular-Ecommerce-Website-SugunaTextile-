import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Observable } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { Products } from 'src/app/shared/models/products';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$: Observable<any[]>;
  dialog: any;

  constructor(private productService: ProductsService, private cartService: ShoppingCartService) {
    this.products$ = this.productService.getAll();
   }

  ngOnInit() {
  }

  addToCart(product: Products){
    this.cartService.addToCart(product);
  }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    category: new FormControl('0'),
    imageUrl: new FormControl(''),
    date: new FormControl('')
  });

  onClear(key) {
    this.productService.delete(key);

  }

  onEdit(product){
    this.productService.populateForm(product);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ProductFormComponent,dialogConfig);
  }

}
