import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ProductService } from '../../shared/product.service';
import { OrderTypesService } from "../../shared/order-types.service";

import { SizesService } from "../../shared/sizes.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(public service: ProductService,
    public ordType : OrderTypesService,
    public sizes : SizesService,
    public datePipe: DatePipe,
    public dialogRef: MatDialogRef <ProductComponent> ) {}



    ngOnInit() {
      this.service.getProducts();
    }

    onClear() {
      this.service.form.reset();
      this.service.initializeFormGroup();
  
    }

    onSubmit(){
      if(this.service.form.valid){
        if (!this.service.form.get('$key').value)
        this.service.insertProduct(this.service.form.value)
        else
        this.service.updateProduct(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.onClose();
      }
  
    }

    onClose() {
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.dialogRef.close();
    }
    demo() {
      this.service.form.setValue({
        $key: null,
        title: 'Nike Shorts',
        price: 200,
        category: '0',
        sizes: [],
        quantity: '',
        imageUrl: 'https://pngriver.com/wp-content/uploads/2017/11/jents-Dress-Shirts-free-PNG-transparent-background-images-free-download-clipart-pics-dress-shirt-png-image-914.png',
        date: ''
      });
    }
}
