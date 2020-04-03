



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
import { MatSliderModule } from '@angular/material/slider';
import {  MatDialogModule } from '@angular/material/dialog';
import {  MatProgressBarModule } from '@angular/material/progress-bar';


import { PromoComponent } from './promo/promo.component';
import { PromoListComponent } from './promo/promo-list/promo-list.component';
import { PromocodeComponent } from './promo/promocode/promocode.component';
import { PromoService } from 'src/app/shared/promo.service';

import {MatExpansionModule} from '@angular/material/expansion';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
   declarations: [
      AppComponent,
      SuppliersComponent,
      SupplierComponent,
    
      
      SupplierListComponent,
      EmployeesComponent,
      EmployeeComponent,
      EmployeeListComponent,
   
      MatConfirmDialogComponent,
     
      SuppliesComponent,
    
      SupplyComponent,
      PromoComponent,
      PromoListComponent,
      PromocodeComponent,

    
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
      PromoService,

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

      PromoComponent,
      PromocodeComponent,
     
   ]
})
export class AppModule { }
  


