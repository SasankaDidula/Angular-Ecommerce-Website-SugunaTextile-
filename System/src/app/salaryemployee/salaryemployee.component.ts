import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-salaryemployee',
  templateUrl: './salaryemployee.component.html',
  styleUrls: ['./salaryemployee.component.css']
})



export class SalaryemployeeComponent implements OnInit {

  constructor(public service: EmployeeService) { }

  ngOnInit() {


  }
 
 
  
  
}
