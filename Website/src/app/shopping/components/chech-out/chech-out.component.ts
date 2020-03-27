import { Component, OnInit} from '@angular/core';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';
import { ShoppingCart } from 'src/app/shared/models/shopping-cart';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-chech-out',
  templateUrl: './chech-out.component.html',
  styleUrls: ['./chech-out.component.css']
})
export class ChechOutComponent implements OnInit{
  cart$: Observable<ShoppingCart>;
  
  constructor(private shoppingCartService: ShoppingCartService) { }
  
  async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
  }

}
