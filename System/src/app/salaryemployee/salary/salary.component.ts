import { Component, OnInit } from '@angular/core';

import { SalaryService } from "../../shared/salary.service";
import { SalaryslipComponent } from '../salaryslip/salaryslip.component';

import *as  jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { SalaryemployeeComponent } from '../salaryemployee.component';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})






export class SalaryComponent implements OnInit {

  $key;
  empName;
  bankAcc;
  designation;
  salary;
  date;
  allow;
  tax;
  pfAcc;
 

  // public dialogRef:MatDialogRef<SalaryComponent>
  route: any;
  dialogRef: any;

constructor(public service: SalaryService,
  public notificationService : NotificationService, private db: AngularFireDatabase
   ){}
   

ngOnInit() {

  this.service.getSalary();


}

currentDate=new Date();


onClear() {


  this.service.form.reset();
  this.service.initializeFormGroup();
  this.notificationService.success(':: Cleared Succesfully' );
}

/*form is valid or not , 
*/
onClose() {
  this.service.form.reset();
  this.service.initializeFormGroup();
  this.dialogRef.close();
}

onSubmit() {
  if (this.service.form.valid) {
    if (!this.service.form.get('$key').value)
      this.service.insertSalary(this.service.form.value);
    else
    this.service.updateSalary(this.service.form.value);
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
    this.onClose();
  }
}

totalE(salary,allow){
  salary+allow;
this.totalE

}

downloadPDF(){
  var data = document.getElementById("report");  
  html2canvas(data).then(canvas => {  
    // Few necessary setting options  
    var imgWidth = 208;   
    var pageHeight = 295;    
    var imgHeight = canvas.height * imgWidth / canvas.width; 
    var heightLeft = imgHeight;  

    const contentDataURL = canvas.toDataURL('image/png')  
    let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
    var position = 0; 
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
    pdf.save('salary.pdf'); // Generated PDF  
    this.notificationService.success('Report Printed Succesfully!' ); 
  });  
}

}

