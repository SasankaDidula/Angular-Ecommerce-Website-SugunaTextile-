import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private db: AngularFireDatabase) { 
    
  }  
  
  create(product: Products) {
    return this.db.list('/productslist').push(product);
  }
  
  getAll() {
    return this.db.list('/productslist').snapshotChanges().pipe(
      map(actions => actions.map(a => {   
        const data = a.payload.val() as Products;
        const key = a.key;
        return { key, ...data };
      }))
    );
  }
  
}

