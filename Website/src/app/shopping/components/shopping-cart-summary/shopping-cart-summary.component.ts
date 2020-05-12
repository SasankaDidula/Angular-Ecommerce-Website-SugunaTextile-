import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
// import { Component, OnInit, Input } from '@angular/core';
// import { ShoppingCart } from '../../../shared/models/shopping-cart';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { async } from '@angular/core/testing';
import { Promotions } from 'src/app/shared/models/Promotions';
import { PromotionService } from 'src/app/shared/services/promotion.service';
import { NewPriceService } from 'src/app/shared/services/new-price.service';
@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent{
  @Input('cart') cart: ShoppingCart;

  promocodes$;
  promocode: string;
  promo: boolean = false;
  error:boolean= false;
  newPrice: number;
  discount : number;
  data : any;


  public promotions: AngularFireList<Promotions[]>;


  constructor(public promotionService: PromotionService, private sharedService: NewPriceService,private db: AngularFireDatabase){
    this.promocodes$ = promotionService.getPromocodes;
}

ngOnInit(){
}

getPromoByCode(code : string){
  return this.db.list('/promotions', ref => ref.orderByChild('promocode').equalTo('code'));
}

  promotion(promocode2: string){
   this.getPromoByCode(promocode2).valueChanges().subscribe((data:any)=>{
try{
    
    if(data) {
      this.promo = true;
      this.error = false;
      this.newPrice = (this.cart.totalPrice - (this.cart.totalPrice * data[0].discount * 0.01));
      this.sharedService.addnewprice(this.newPrice.toFixed(2));
     

  }}
  catch(err){
    this.error= true;
    this.promo = false;
    this.newPrice = this.cart.totalPrice;
    this.sharedService.newPrice = this.newPrice;
  }
 });
  }

}
