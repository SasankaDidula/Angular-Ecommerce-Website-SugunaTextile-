import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products: Products[];

  constructor(private productServce: ProductsService){
      
  }
  ngOnInit(): void {

  }

}


