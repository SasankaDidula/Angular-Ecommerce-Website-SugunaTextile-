import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private db :AngularFireDatabase, private datePipe: DatePipe) { }

  
  employeeList : AngularFireList<any>;

  form : FormGroup = new FormGroup({

    $key : new FormControl(null),
    eID:new FormControl('',Validators.required),
    eName : new FormControl('',Validators.required),
    eDesignation : new FormControl(''),
    eEmail : new FormControl('',Validators.email),
    eAddress : new FormControl(''),
    eMobile : new FormControl('',[Validators.required,Validators.pattern('[6-8]\\d{8}')]),
    eDepartment: new FormControl(0),
    eJoinedDate : new FormControl(''),
    eSalary : new FormControl('',[Validators.required, Validators.min(0)]),
    isPermanent: new FormControl(false)
  


  });

  initializeFormGroup(){

    this.form.setValue({

      $key:null,
      eID:'',
      eName:'',
      eDesignation:'',
      eEmail:'',
      eAddress:'',
      eMobile:'',
      eDepartment:0,
      eJoinedDate:'',
      eSalary:'',
      isPermanent: false

    });
  }

    getEmployees(){
      this.employeeList =this.db.list('employees');
    
      return this.employeeList.snapshotChanges(); 
    }
//snapshotchnges it will return the observerble from the angularfire

//employee object contains details automatically creted the primary key
    insertEmployee(employee){
      this.employeeList.push({
      eID: employee.eID,
      eName: employee.eName,
      eDesignation: employee.eDesignation,
      eEmail: employee.eEmail,
      eAddress: employee.eAddress,
      eMobile: employee.eMobile,
      eDepartment: employee.eDepartment,
      eJoinedDate: employee.eJoinedDate  == "" ? "" : this.datePipe.transform(employee.eJoinedDate, 'yyyy-MM-dd'),
      eSalary: employee.eSalary,
      isPermanent: false
      });
    }

//update an existing record and  parameter primarykey or dollar key and second para pass object  contains the updated details
    updateEmployee(employee){
      this.employeeList.update(employee.$key,
        {
          eID: employee.eID,
          eName: employee.eName,
          eDesignation: employee.eDesignation,
          eEmail: employee.eEmail,
          eAddress: employee.eAddress,
          eMobile: employee.eMobile,
          eDepartment: employee.eDepartment,
          eJoinedDate: employee.eJoinedDate  == "" ? "" : this.datePipe.transform(employee.eJoinedDate, 'yyyy-MM-dd'),
          eSalary: employee.eSalary,
          isPermanent: employee.isPermanent

        } );
    }





  //by passing primary key

  deleteEmployee($key:string){
    this.employeeList.remove($key);
  }


  populateForm(employee){
  this.form.setValue(employee); //department which is to be ommited
}

}
