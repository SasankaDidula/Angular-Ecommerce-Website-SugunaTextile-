import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerService } from '../shared/customer.service'
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }
 

  ngOnInit() {
    
  }

  
}
