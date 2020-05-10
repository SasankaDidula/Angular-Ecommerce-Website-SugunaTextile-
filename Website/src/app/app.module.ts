import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Route,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './core/components/bs-navbar/bs-navbar.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { ChechOutComponent } from './shopping/components/chech-out/chech-out.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth-guard.service';
import { UserService } from './shared/services/user.service';
import { AdminAuthGuardService as AdminAuthGuard } from './shared/services/admin-auth-guard.service';
import { CategoryService } from './shared/services/category.service';
import { ShoppingCartService } from './shared/services/shopping-cart.service';
import { ProductQuantityComponent } from './shared/components/product-quantity/product-quantity.component';
import { ShoppingCartSummaryComponent } from './shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shopping/components/shipping-form/shipping-form.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { OrderService } from './shared/services/order.service';
import { ProductsService } from './shared/services/products.service';
import { ProductFilterComponent } from './shopping/components/products/product-filter/product-filter.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { SignInComponent } from './core/components/sign-in/sign-in.component';
import { SignUpComponent } from './core/components/sign-up/sign-up.component';
import { MyProfileComponent } from './core/components/my-profile/my-profile.component';
import { ProfileNavbarComponent } from './core/components/profile-navbar/profile-navbar.component';
import { ChangePasswordComponent } from './core/components/change-password/change-password.component';
import { DeleteAccountComponent } from './core/components/delete-account/delete-account.component';
import { VerifyEmailComponent } from './core/components/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './core/components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ChechOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProfileNavbarComponent,
    MyProfileComponent,
    ProfileNavbarComponent,
    ChangePasswordComponent,
    DeleteAccountComponent
  ],
  
  imports: [
    AngularFireModule.initializeApp(environment.firebase,'SagunaTexttile'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    BrowserModule,  
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: ProductsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-cart', component: ShoppingCartComponent},
      {path: 'signin', component: SignInComponent},
      {path: 'signup', component: SignUpComponent},
      {path: 'dashboard', component: MyProfileComponent},
      {path: 'updateinfo', component: ChangePasswordComponent},
      {path: 'deleteaccount', component: DeleteAccountComponent},
      {path: 'verifyemail', component: VerifyEmailComponent},
      {path:'forgotpassword',component:ForgotPasswordComponent},




      {path: 'check-out', component: ChechOutComponent, canActivate: [AuthGuard]},
      {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]},
      {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
      
      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      {path: 'admin/components/product-form', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]}
      
    ]),
    BrowserAnimationsModule
  ],
  providers: [AngularFirestore, 
              AuthService, 
              AuthGuard,
              UserService,
              AdminAuthGuard,
              CategoryService,
              ProductsService,
              ShoppingCartService,
              OrderService,
              AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
