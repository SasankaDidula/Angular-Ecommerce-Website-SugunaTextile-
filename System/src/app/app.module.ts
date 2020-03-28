import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { SuppliersService } from './shared/suppliers.service';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import {MatExpansionModule} from '@angular/material/expansion';
import { environment } from "../environments/environment";
import {MatDialogRef} from '@angular/material/dialog';
import { OrderTypesService } from "./shared/order-types.service";
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    SupplierComponent,
    SupplierListComponent,
    
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
  providers: [SuppliersService,,OrderTypesService, {
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
