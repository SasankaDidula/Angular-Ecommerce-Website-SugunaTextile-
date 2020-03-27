import { Injectable } from '@angular/core';





import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Employee } from 'src/app/modelsHR/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeCollection: AngularFirestoreCollection<Employee>;
  employees: Observable<Employee[]>;
 

  constructor(public db: AngularFirestore) {
     // this.employees = this.db.collection('employees').valueChanges(); 
   
    this.employeeCollection = this.db.collection('employees');

     this.employees = this.employeeCollection.snapshotChanges().map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Employee;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

   getEmployees(){
     return this.employees;
   }
   addEmployee(employee:Employee){ 
     this.employeeCollection.add(employee);
   }
  
}
