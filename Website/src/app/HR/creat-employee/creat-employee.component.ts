import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/modelsHR/Employee';

@Component({
  selector: 'app-creat-employee',
  templateUrl: './creat-employee.component.html',
  styleUrls: ['./creat-employee.component.css']
})
export class CreatEmployeeComponent implements OnInit {

  
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

}
