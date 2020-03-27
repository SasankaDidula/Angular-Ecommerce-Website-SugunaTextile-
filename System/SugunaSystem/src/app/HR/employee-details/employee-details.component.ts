import { Component, OnInit, Input } from '@angular/core';

import { EmployeeService } from '../services/employee-service.service';
import { Employee } from 'src/app/modelsHR/Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

 employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees=>{
      this.employees = employees;
    });
  }
  // deleteEmployee(){
  //   this.employeeService.deleteEmployee(this.employee.key)
  //   .catch(err => console.log(err));
  // }

}
