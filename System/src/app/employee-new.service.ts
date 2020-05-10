import { Injectable } from '@angular/core';
import { AngularFireObject, AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Employee } from './model/Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeNewService {

  employeesRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  employeeRef: AngularFireObject<any>; 
  
  constructor(private db: AngularFireDatabase) { }

  AddEmployee(employee: Employee){
    this.employeesRef.push({
      
      empID:employee.empID,
      empName:employee.empName,
      designation:employee.designation,
      email:employee.email,
      address:employee.address,
      mobile:employee.mobile,
      department:employee.department,
      joined:employee.joined,
      salary:employee.salary,
      isPermanent: employee.isPermanent

    })
  }
  
  GetEmployee(id: string) {
    this.employeeRef = this.db.object('employee-list/' + id);
    return this.employeeRef;
  }

  UpdateEmployee(employee: Employee) {
    this.employeeRef.update({
      empID:employee.empID,
      empName:employee.empName,
      designation:employee.designation,
      email:employee.email,
      address:employee.address,
      mobile:employee.mobile,
      department:employee.department,
      joined:employee.joined,
      salary:employee.salary,
      isPermanent: employee.isPermanent
    })
  }

  DeleteEmployee(id: string) { 
    this.employeeRef = this.db.object('employee-list/'+id);
    this.employeeRef.remove();
  }
  GetEmployeeList() {
    this.employeesRef = this.db.list('employee-list');
    return this.employeesRef;
  } 
}
