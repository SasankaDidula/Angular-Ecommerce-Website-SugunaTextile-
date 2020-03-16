import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

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


