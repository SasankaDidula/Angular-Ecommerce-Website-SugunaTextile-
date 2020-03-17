import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Products } from './models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(public db: AngularFireDatabase) { 
    
  }  
  
  create(product: any) {
    return this.db.list('/products').push(product);
  }
  
  getAll() {
    return this.db.list('/products').snapshotChanges().pipe(
      map(actions => actions.map(a => {   
        const data = a.payload.val() as Products;
        const key = a.key;
        return { key, ...data };
      }))
    );
  }
  
}

