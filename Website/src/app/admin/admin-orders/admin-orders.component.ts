import { Component } from '@angular/core';
import { OrderService } from 'src/app/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {

  orders$: Observable<any>;

  constructor(private orderService: OrderService) {
    this.orders$ = orderService.getOrders().valueChanges();
   }

}
