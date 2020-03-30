import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliesComponent } from "./suppliers/supplies/supplies.component";


const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'supplies', component: SuppliesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
