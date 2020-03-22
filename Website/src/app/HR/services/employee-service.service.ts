import { Injectable } from '@angular/core';


import { Employee } from 'src/app/models/modelsHR/Employee';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  private dbPath = '/HR/services';//here
  
  employeesRef: AngularFireList<Employee> =null;

  constructor(public db: AngularFireDatabase) {
      this.employeesRef = db.list(this.dbPath); 
   }
   createEmployee(employee: Employee): void{
     this.employeesRef.push(employee);
   }
   updateEmployee(key: string, value: any): Promise<void>{
      return this.employeesRef.update(key, value);
   }
   deleteEmployee(key: string): Promise<void>{
     return this.employeesRef.remove(key);
   }
   getEmployeesList(): AngularFireList<Employee>{
     return this.employeesRef;
   }
   deleteAll(): Promise<void>{
     return this.employeesRef.remove();
   }
  
}
