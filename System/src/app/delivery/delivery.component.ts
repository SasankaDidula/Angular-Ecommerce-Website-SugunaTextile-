import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { OrderTypesService } from '../shared/order-types.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NotificationService } from '../shared/notification.service';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(public service: ProductService, public ordType : OrderTypesService, public notificationService : NotificationService) { }

  listData: MatTableDataSource<any>;
  
  displayedColumns: string[] =[`#`,`riderName`,`riderAddress`,`riderMobile`,`riderEmail`,`bikenumber`,'actions'];
  
      @ViewChild(MatSort,{static: true}) sort: MatSort;
      @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  ngOnInit() {
  }
}