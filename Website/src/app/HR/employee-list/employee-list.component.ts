import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(){
    this.getEmployeeList();
  }
  getEmployeeList(){
    this.employeeService.getEmployeesList().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key: c.payload.key, ...c.payload.val()})

        )
        )
    ).subscribe(employees => {
      this.employees= this.employees;
    });
  }
  deleteEmployees(){
    this.employeeService.deleteAll().catch(err => console.log(err))
  }

}
