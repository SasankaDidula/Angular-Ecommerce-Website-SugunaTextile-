import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, AngularFireObject, AngularFireList} from 'angularfire2/database';
import { OrderService } from './order.service';
import { ShoppingCartService } from './shopping-cart.service';


@Injectable()
export class PromotionService {
    promocode: AngularFireObject<any>;

  promocodes: AngularFireList<any[]>;

  constructor( public af: AngularFireDatabase) {
    list => {
      this.promocodes = list.map(item =>{
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    }
    this.promocodes = this.af.list('/promotions');
  
  }

  getPromocodes(){
    return this.af.list('/promotions');
  }

  
  
  }
   
