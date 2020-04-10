import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { SuppliersService } from './shared/suppliers.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import {MatExpansionModule} from '@angular/material/expansion';
import { environment } from "../environments/environment";
import { OrderTypesService } from "./shared/order-types.service";

import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';


import { DatePipe } from '@angular/common';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DepartmentService } from './shared/department.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

import { SuppliesComponent } from './suppliers/supplies/supplies.component';
import { SuppliesService } from "./shared/supplies.service";
import { SupplyComponent } from './suppliers/supplies/supply/supply.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderReportComponent } from './orders/order-report/order-report.component';
import { OrderService } from './shared/order.service';

import {ProductComponent} from './products/product/product.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductStockComponent} from './products/product-stock/product-stock.component';
import {ProductStockListComponent} from './products/product-stock-list/product-stock-list.component';
import { NotificationService } from './shared/notification.service';
import { EmployeeService } from './shared/employee.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ProductService } from './shared/product.service';
import { StockService } from './shared/stock.service';





@NgModule({
 
   declarations: [
      AppComponent,
      SuppliersComponent,
      SupplierComponent,
      OrdersComponent,
      OrderReportComponent,
      SupplierListComponent,
      EmployeesComponent,
      EmployeeComponent,
      EmployeeListComponent,
   
      MatConfirmDialogComponent,
     
      SuppliesComponent,
    
      SupplyComponent,
    
   ],
   imports: [
      BrowserModule,
      MatSliderModule,
      AppRoutingModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MaterialModule,
      FormsModule,
      MatDialogModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      MatExpansionModule,
      AngularFireModule.initializeApp(environment.firebaseConfig)
   ],
   providers: [
      SuppliersService,
      OrderTypesService,
      OrderService,
      DatePipe,
      DepartmentService,
      SuppliesService,
    
      
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      SupplierComponent,
   
      EmployeeComponent,
    
      MatConfirmDialogComponent,
    
      SupplyComponent,
   ]
     
})
export class AppModule { }
