import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash'; 
import { EmployeeService } from './employee.service';


@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  salaryList : AngularFireList<any>;
  
  employeeList =this.firebase.list('employees');

  constructor(private firebase: AngularFireDatabase, private service: EmployeeService) {}
  ngOnInit() {
    this.service.getEmployees();//this will called when ALL the modification  and deletion happens
     
  }
  

    form : FormGroup = new FormGroup({
  
       $key: new FormControl(null),
      empName:new FormControl(''),
      designation : new FormControl(''),
      salary : new FormControl('',[Validators.required, Validators.min(0)]),
      allow : new FormControl('',[Validators.min(0)]),
      tax : new FormControl('',[Validators.required, Validators.min(0)]),
      date :new FormControl(''),
      bankAcc :new FormControl(''),
      pfAcc:new FormControl(''),
      isIssued:new FormControl(false)
  
   });
 
   initializeFormGroup(){

    this.form.setValue({
      $key : null,
      empName :'',
      designation :'',
      salary : '',
      allow : '',
      tax : '',
      date :'',
      bankAcc:'',
      pfAcc:'',
      isIssued:false
    
      
    })
}


getSalary(){
  this.salaryList = this.firebase.list('salarys');
  return this.salaryList.snapshotChanges();
}
insertSalary(salary){

  this.salaryList.push({
    empName :salary.empName,
    designation :salary.designation,
    salary :salary.salary,
    allow:salary.allow,
   tax:salary.tax,
   date:salary.date,
   bankAcc:salary.bankAcc,
   pfAcc:salary.pfAcc,
   isIssued:false


  });
}

  updateSalary(salary){
    this.salaryList.update(salary.$key,
      {
        
        empName:salary.empName,
        designation:salary.designation,
       salary:salary.salary,
        allow:salary.allow,
        tax:salary.tax,
       date:salary.date,
        bankAcc:salary.bankAcc,
        pfAcc:salary.pfAcc,
        isIssued:salary.isIssued,
  
      });
  }
  deleteSalary($key: string){
    this.salaryList.remove($key);
  }
  
  // populateForm(employee){
  //   this.employeeList.set(employee.$key,
  //     {
  //       empID: employee.empID,
  //       empName: employee.empName,
  //       salary: employee.salary,
      

  //     } );
 
  //   this.form.setValue(employee);
  // }
  
  populateForm(salary){
    this.form.setValue(salary); //department which is to be ommited
  }

}