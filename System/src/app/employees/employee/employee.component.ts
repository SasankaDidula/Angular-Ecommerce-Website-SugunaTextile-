import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NotificationService } from 'src/app/shared/notification.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
    private notificationService : NotificationService,
     private departmentService: DepartmentService,
     private dialogRef:MatDialogRef<EmployeeComponent>){}
     

  ngOnInit() {
    this.service.getEmployees();//this will called when ALL the modification  and deletion happens
  }
  


  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Cleared Succesfully' );
  }

  /*form is valid or not , 
  */

 
 onSubmit(){
  if(this.service.form.valid){
    if (!this.service.form.get('$key').value)
    this.service.insertEmployee(this.service.form.value)
    
    
    else
    this.service.updateEmployee(this.service.form.value);
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted Succesfully' );
    this.onClose();
  }
}

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
