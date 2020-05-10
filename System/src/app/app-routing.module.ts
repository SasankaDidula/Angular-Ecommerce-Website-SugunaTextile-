import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProductsComponent } from "src/app/products/products.component";
import { SuppliesComponent } from "./suppliers/supplies/supplies.component";
import { OrdersComponent } from './orders/orders.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SalaryemployeeComponent } from './salaryemployee/salaryemployee.component';


import { TailoringsComponent } from "./tailorings/tailorings.component";
import { CustomerComponent } from './customer/customer.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'customers', component: CustomerComponent},
  {path: 'tailoring', component: TailoringsComponent},
  {path: 'products', component: ProductsComponent},

  {path: 'supplies', component: SuppliesComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'salaryemployee', component: SalaryemployeeComponent},
  {path: 'trending', component: TrendingComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
