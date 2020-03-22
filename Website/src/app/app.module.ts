import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ChechOutComponent } from './chech-out/chech-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService as AdminAuthGuard } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ShoppingCartService } from './shopping-cart.service';
import { ValueArrayPipe } from './value-array-pipe.pipe';

import { HumanRComponent } from './HR/human-r/human-r.component';
import { EmployeeService } from './HR/services/employee-service.service';
import { EmployeeDetailsComponent } from './HR/employee-details/employee-details.component';
import { CreatEmployeeComponent } from './HR/creat-employee/creat-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ChechOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    ValueArrayPipe,
    
    HumanRComponent,
    
    EmployeeDetailsComponent,
    
    
    
    CreatEmployeeComponent
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase,'SagunaTexttile'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    BrowserModule,  
    AppRoutingModule,  
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'login', component: LoginComponent},
      {path: 'HR/employee-details', component: EmployeeDetailsComponent},

      {path: 'check-out', component: ChechOutComponent, canActivate: [AuthGuard]},
      {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
      
      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]},

    ]),
    BrowserAnimationsModule
  ],
  providers: [AngularFirestore, 
              AuthService, 
              AuthGuard,
              UserService,
              AdminAuthGuard,
              CategoryService,
              ShoppingCartService,
              EmployeeService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
