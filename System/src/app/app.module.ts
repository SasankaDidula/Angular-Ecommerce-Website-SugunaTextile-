import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AppRoutingModule } from './app-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { SuppliersService } from './shared/suppliers.service';
import { environment } from "../environments/environment";
<<<<<<< HEAD
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { DepartmentService } from './shared/department.service';
import { EmployeeService } from './shared/employee.service';
import { NotificationService } from './shared/notification.service';
import { StockService } from 'src/app/shared/stock.service';
import { DatePipe } from '@angular/common';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import {ProductService } from './shared/product.service';
import {MatDialogRef} from '@angular/material/dialog';
import { OrderTypesService } from "./shared/order-types.service";
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { ProductComponent } from 'src/app/products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductStockComponent } from './products/product-stock/product-stock.component';
import { ProductStockListComponent } from './products/product-stock-list/product-stock-list.component';



import { DatePipe } from '@angular/common';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DepartmentService } from './shared/department.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

import { SuppliesComponent } from './suppliers/supplies/supplies.component';
import { SuppliesService } from "./shared/supplies.service";

import { SupplyComponent } from './suppliers/supplies/supply/supply.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderService } from './shared/order.service';
import { OrderReportComponent } from './orders/order-report/order-report.component';


>>>>>>> 5a307ccb4b4470b3756e9a99ca9b006a1f3a501c


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    
<<<<<<< HEAD
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MatProgressBarModule,
    AngularFireDatabaseModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    ProductService,
    SuppliersService,
    DepartmentService,
    EmployeeService,
    NotificationService,
    DatePipe,
    StockService,
    SuppliersService,
    OrderTypesService, {
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent],
  entryComponents: [ SupplierComponent,MatConfirmDialogComponent]
=======
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
>>>>>>> 5a307ccb4b4470b3756e9a99ca9b006a1f3a501c

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
      OrderService,
      SupplyComponent,
     
})
export class AppModule { }
  