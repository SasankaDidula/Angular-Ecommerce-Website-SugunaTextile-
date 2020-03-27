import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { AngularFireDatabaseModule } from '@angular/fire/database';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { HumanRComponent } from './HR/human-r/human-r.component';
import { EmployeeDetailsComponent } from './HR/employee-details/employee-details.component';
import { CreatEmployeeComponent } from './HR/creat-employee/creat-employee.component';
import { EmployeeService } from './HR/services/employee-service.service';

@NgModule({
  declarations: [
    HumanRComponent,
    EmployeeDetailsComponent,
    CreatEmployeeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'SagunaTexttile'),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    BrowserModule,  
    AppRoutingModule,  
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'HR/employee-details', component: EmployeeDetailsComponent},
      {path: 'HR/creat-employee', component:CreatEmployeeComponent},
    ])
  ],
  providers: [
    EmployeeService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
