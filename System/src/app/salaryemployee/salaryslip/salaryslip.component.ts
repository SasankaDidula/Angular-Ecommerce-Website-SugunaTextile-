import { SalaryService } from 'src/app/shared/salary.service';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';


import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import *as html2canvas from 'html2canvas';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NotificationService } from 'src/app/shared/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-salaryslip',
  templateUrl: './salaryslip.component.html',
  styleUrls: ['./salaryslip.component.css']
})
export class SalaryslipComponent implements OnInit {

  
  dialogService: any;

  constructor(private service: SalaryService,
    private notificationService : NotificationService,
    private dialog: MatDialog) { } 

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['$key','empName','bankAcc','isIssued','actions'];
 
  @ViewChild (MatSort,{static:true}) sort: MatSort;
  @ViewChild (MatPaginator,{static:true}) paginator: MatPaginator;
  searchKey: string;




  ngOnInit() {
    this.service.getSalary().subscribe(
      list => {
        let array = list.map(item => {
          //let department = this.departmentService.getDepartment(item.payload.val()['department']);
          return {
            $key: item.key,
           // department,
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
   /* onCreate(){
      this.service.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
    
      this.dialog.open(EmployeeComponent,dialogConfig);  
    }

    onEdit(row){
      this.service.populateForm(row); 
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(EmployeeComponent,dialogConfig);    
    }
*/

    onDelete($key){
          this.service.deleteSalary($key);
          this.notificationService.success(':: Deleted successfully');
         
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
        pdf.text('Employee SalarySliip LIst of Mufaza Company', 10, 10);
        var position = 0;  

        pdf.addImage(contentDataURL, 'PNG',0, position, imgWidth, imgHeight)  
        pdf.save('salarylist.pdf'); // Generated PDF  
        this.notificationService.success('Report Printed Succesfully!' ); 
      });  
    }
  }