import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { tap, map } from 'rxjs/operators';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(){
    //return this.db.list('/categories/').valueChanges();
    return this.db.list('/categories').snapshotChanges().pipe(
      map(actions => actions.map(a => {   
        const data = a.payload.val() as Products;
        const key = a.key;
        return { key, ...data };
      }))
    );
  }
}
