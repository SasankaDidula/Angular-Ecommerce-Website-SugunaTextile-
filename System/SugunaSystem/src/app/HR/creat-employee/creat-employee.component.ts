import { Component, OnInit } from '@angular/core';


import { EmployeeService } from '../services/employee-service.service';
import { Employee } from 'src/app/modelsHR/Employee';

@Component({
  selector: 'app-creat-employee',
  templateUrl: './creat-employee.component.html',
  styleUrls: ['./creat-employee.component.css']
})
export class CreatEmployeeComponent implements OnInit {

  employee: Employee ={
    name: '',
    age: ''
  }
  
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(){
  }
  onSubmit(){
    if(this.employee.name != '' && this.employee.age != ''){
      this.employeeService.addEmployee(this.employee);
      this.employee.name='';
      this.employee.age='';
    }
  }
}
