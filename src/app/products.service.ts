import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Products } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsCollection: AngularFirestoreCollection<Products>;
  items: Observable<Products[]>;
  
  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection('/items').valueChanges();
  }

  getItems(){
    return this.items;
  }
}

