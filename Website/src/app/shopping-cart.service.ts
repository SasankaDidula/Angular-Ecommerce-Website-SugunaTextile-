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
  constructor(private db: AngularFireDatabase) { }

  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/'+ cartId).valueChanges().pipe(map(((x: { [productId: string]: ShoppingCartItem }) => new ShoppingCart(x) )));

  }
  
  removeFromCart(product: Products) {
    this.updateItem(product, -1);
    this.updateProd(product, 1);
  }

  async addToCart(product: Products) { 
    this.updateItem(product, 1);
    this.updateProd(product,-1);
  }

  async clearCart() { 
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getItem(cartId: string, productId: string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private getProd(productId: string){
    return this.db.object('/products/'+ productId);
  }

  private async updateProd(product: Products, change: number){
    let item$ = this.getProd(product.$key);
    item$.valueChanges().pipe(take(1)).subscribe((item: ShoppingCartItem) =>{
      let quantity = (item.quantity || 0) + change;
      if (quantity === 0) item$.remove();
      else item$.update({ 
        quantity: quantity
      });
    });
  }

  private async updateItem(product, change: number) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, product.$key);
    item$.valueChanges().pipe(take(1)).subscribe((item: ShoppingCartItem) =>{
      let quantity = (item.quantity || 0) + change;
      if (quantity === 0) item$.remove();
      else item$.update({ 
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: quantity});
    })
  }

  private async getOrCreateCartId(){
      let cartId = localStorage.getItem('cartId');
      if(cartId) return cartId;

      let result = await this.create();
      localStorage.setItem('cartId', result.key);
      return result.key;
      
  }

}
