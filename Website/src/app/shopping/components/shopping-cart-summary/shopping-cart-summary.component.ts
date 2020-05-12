import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
// import { Component, OnInit, Input } from '@angular/core';
// import { ShoppingCart } from '../../../shared/models/shopping-cart';
import {PromotionService} from 'shared/services/promotion.service';
import {Promotions} from 'shared/models/Promotions';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { NewPriceService } from 'shared/services/new-price.service';
import { async } from '@angular/core/testing';
@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent{
  @Input('cart') cart: ShoppingCart;

}
