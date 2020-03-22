import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Products } from './models/products';
import { take, map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { ShoppingCart } from './models/shopping-cart';
import { ShoppingCartItem } from './models/shopping-cart-item';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  removeFromCart(product: Products) {
    this.updateItem(product, -1);
  }

  private async updateItem(product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.$key);
    item$.valueChanges().pipe(take(1)).subscribe((item: ShoppingCartItem) =>{
      item$.update({ 
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price, 
        quantity: (item.quantity || 0) + change});
    })
  }

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/'+ cartId).valueChanges().pipe(map((x: ShoppingCart) => new ShoppingCart(x.itemsMap) ));

  }

  getItem(cartId: string, productId: string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(){
      let cartId = localStorage.getItem('cartId');
      if(cartId) return cartId;

      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
      
  }

  async addToCart(product) {
    let cartId = await this.getOrCreateCartId();
    let item$: Observable<any> = this.getItem(cartId, product.key).valueChanges();
    let item$$ = this.getItem(cartId, product.key);
    item$.pipe(take(1)).subscribe( item => {
       if( item ) {
        item$$.update({quantity: item.quantity + 1});
      }else{
        item$$.set({product: product, quantity: 1});
     }
  });
  }
}
