import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Products } from './models/products';
import { take, map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { ShoppingCart } from './models/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/'+ cartId).valueChanges().pipe(map((x: ShoppingCart) => new ShoppingCart(x.items)))
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
