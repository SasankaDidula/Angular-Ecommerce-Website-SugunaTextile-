import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';



@Component({
  selector: 'app-salaryemployee',
  templateUrl: './salaryemployee.component.html',
  styleUrls: ['./salaryemployee.component.css']
})



export class SalaryemployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  ngOnInit() {

    //this.service.getEmployees().subscribe(
//list => {

        
        // let array = list.map(item => {
        //   let department = this.departmentService.getDepartment(item.payload.val()['department']);
        //   return {
        //     $key: item.key,
        //     department,
        //     ...item.payload.val()
        //   };
        // });
      

     // });



  }
 
 
  
  
}
