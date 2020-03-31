import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
<<<<<<< HEAD
import { ProductsComponent } from "./products/products.component";
=======
import { SuppliesComponent } from "./suppliers/supplies/supplies.component";
import { OrdersComponent } from './orders/orders.component';

>>>>>>> 5a307ccb4b4470b3756e9a99ca9b006a1f3a501c


const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'suppliers', component: SuppliersComponent},
<<<<<<< HEAD
  {path: 'products', component: ProductsComponent},
=======
  {path: 'supplies', component: SuppliesComponent},
  {path: 'orders', component: OrdersComponent},

>>>>>>> 5a307ccb4b4470b3756e9a99ca9b006a1f3a501c
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
