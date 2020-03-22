import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/modelsHR/Employee';
import { EmployeeService } from '../services/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }
  deleteEmployee(){
    this.employeeService.deleteEmployee(this.employee.key)
    .catch(err => console.log(err));
  }

}
