import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ProductsComponent } from "./products/products.component";
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'orders', component: OrdersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
