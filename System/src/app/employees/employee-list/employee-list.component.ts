import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/notification.service';
import { EmployeeService } from 'src/app/shared/employee.service';
import { DepartmentService } from 'src/app/shared/department.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeComponent } from '../employee/employee.component';
import * as jsPDF from 'jspdf';
//import 'jspdf-autotable';

import   html2canvas from 'html2canvas';
import { SalaryService } from 'src/app/shared/salary.service';
import { SalaryemployeeComponent } from 'src/app/salaryemployee/salaryemployee.component';
import { SalaryComponent } from 'src/app/salaryemployee/salary/salary.component';





@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  dialogService: any;
  dialogRef: any;

  constructor(private service: EmployeeService,private salaryService: SalaryService,
    private departmentService: DepartmentService,
    private notificationService : NotificationService,
    private dialog: MatDialog) { } 

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['empID','empName', 'email', 'mobile','department','actions'];
 
  @ViewChild (MatSort,{static:true}) sort: MatSort;
  @ViewChild (MatPaginator,{static:true}) paginator: MatPaginator;
  searchKey: string;




  ngOnInit() {
    this.service.getEmployees().subscribe(
      list => {
        let array = list.map(item => {
          let department = this.departmentService.getDepartment(item.payload.val()['department']);
          return {
            $key: item.key,
            department,
            ...item.payload.val()
          };
        });
      

        this.listData = new MatTableDataSource(array);
        this.listData.sort= this.sort;
        this.listData.paginator=this.paginator
      });
      
  }
 
    onSearchClear(){
      this.searchKey="";
      this.applyFilter();
    }

    applyFilter(){
      this.listData.filter = this.searchKey.trim().toLowerCase();
    }
    onCreate(){
      this.service.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
    
      this.dialog.open(EmployeeComponent,dialogConfig);  
    }
    
    onSubmit(){
      if(this.service.form.valid){
        this.service.insertEmployee(this.service.form.value)
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success(':: Submitted Succesfully' );
      }
  
    }

    onEdit(row){
      this.service.populateForm(row); 
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(EmployeeComponent,dialogConfig); 

      
    }
   

    onDelete($key){
          this.service.deleteEmployee($key);
          this.notificationService.success(':: Deleted successfully');
         
    }

    onSalary(row){
      this.salaryService.populateForm(row); 
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      dialogConfig.height = "80%"
      this.dialog.open(SalaryComponent,dialogConfig); 
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
        pdf.text('Employee LIst of Mufaza Company', 10, 10);
        var position = 0;  

        pdf.addImage(contentDataURL, 'PNG',0, position, imgWidth, imgHeight)  
        pdf.save('employee.pdf'); // Generated PDF  
        this.notificationService.success('Report Printed Succesfully!' ); 
      });  
    }

}
