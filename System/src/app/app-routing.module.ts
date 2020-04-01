
import { TailoringComponent } from './tailorings/tailoring/tailoring.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuppliersComponent } from "./suppliers/suppliers.component";
import { ProductsComponent } from "./products/products.component";
import { EmployeesComponent } from './employees/employees.component';
import { TailoringsComponent } from "./tailorings/tailorings.component";
import { SuppliesComponent } from "./suppliers/supplies/supplies.component";
import { OrdersComponent } from './orders/orders.component';



const routes: Routes = [
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'tailoring', component: TailoringsComponent},
  {path: 'supplies', component: SuppliesComponent},
  {path: 'orders', component: OrdersComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
