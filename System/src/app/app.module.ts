import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { OrderTypesService } from "./shared/order-types.service";

import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';


import { DatePipe } from '@angular/common';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { DepartmentService } from './shared/department.service';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { SalaryComponent } from './salaryemployee/salary/salary.component';
import { SalaryemployeeComponent } from './salaryemployee/salaryemployee.component';
import { SalaryslipComponent } from './salaryemployee/salaryslip/salaryslip.component';
import { SalaryService } from './shared/salary.service';
import { OrdersComponent } from './orders/orders.component';
import { OrderReportComponent } from './orders/order-report/order-report.component';
import { OrderService } from './shared/order.service';

import { SuppliesComponent } from './suppliers/supplies/supplies.component';
import { SuppliesService } from "./shared/supplies.service";

import { SupplyComponent } from './suppliers/supplies/supply/supply.component';
import { MatSliderModule } from '@angular/material/slider';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    SupplierComponent,
    SupplierListComponent,
    EmployeeListComponent,
    EmployeesComponent,
    EmployeeComponent,
    MatConfirmDialogComponent,
    SalaryComponent,
    SalaryemployeeComponent,
    SalaryslipComponent,
    OrdersComponent,
    OrderReportComponent

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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    SuppliersService,
    DepartmentService,
    EmployeeService,
    NotificationService,
    SalaryService,
    DatePipe,
    SuppliersService,
    OrderTypesService,
    OrderService, {
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent],
  entryComponents: [ SupplierComponent,MatConfirmDialogComponent]

      DatePipe,
    
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
  