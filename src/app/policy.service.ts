import { Injectable } from '@angular/core';
import { Products } from './products';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class PolicyService {
  productsRef: AngularFireList<any>;
  productRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {}

  /* Create book */
  AddBook(product: Products) {
    this.productsRef.push({
      name: product.name,
      image: product.image,
      quantity: product.quantity,
      price: product.price,
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Get book */
  GetBook(id: string) {
    this.productRef = this.db.object('products-list/' + id);
    return this.productRef;
  }  

  /* Get book list */
  GetBookList() {
    this.productsRef = this.db.list('products-list');
    return this.productsRef;
  }

  /* Update book */
  UpdateBook(id :string, product: Products) {
    this.productRef.update({
        name: product.name,
        image: product.image,
        quantity: product.quantity,
        price: product.price,
    })
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  /* Delete book */
  DeleteBook(id: string) {
    this.productRef = this.db.object('products-list/' + id);
    this.productRef.remove()
    .catch(error => {
      this.errorMgmt(error);
    })
  }

  // Error management
  private errorMgmt(error) {
    console.log(error)
  }
}
