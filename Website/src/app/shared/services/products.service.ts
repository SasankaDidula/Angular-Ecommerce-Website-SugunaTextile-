import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  form;
  
  constructor(private db: AngularFireDatabase) { 
    
  }  
  
  create(product: Products) {
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

  delete(itemKey){
    this.db.object('/products/' + itemKey).remove();
  }
  
 initializeFormGroup() {
    this.form.setValue({

      $key: null,
      title: '',
      price: '',
      category: '0',
      imageUrl: '',
      date: ''
    });
  }
  
}

