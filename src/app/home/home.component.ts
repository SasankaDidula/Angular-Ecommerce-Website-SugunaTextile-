import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  products: Products[];

  constructor(db: AngularFireDatabase){
    db.list('/products')
      .valueChanges().subscribe((products: any[])=> {
        this.products = products;
        console.log(this.products);
      },(err) => {console.log(err)});
      
  }

}


