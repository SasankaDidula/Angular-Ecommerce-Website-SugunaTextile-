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
import html2canvas from 'html2canvas';






@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  dialogService: any;

  constructor(private service: EmployeeService,
    private departmentService: DepartmentService,
    private notificationService : NotificationService,
    private dialog: MatDialog) { } 

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['$key','eID','eName', 'eEmail', 'eMobile','eDepartment','actions'];
 
  @ViewChild (MatSort,{static:true}) sort: MatSort;
  @ViewChild (MatPaginator,{static:true}) paginator: MatPaginator;
  searchKey: string;




  ngOnInit() {
    this.service.getEmployees().subscribe(
      list => {
        let array = list.map(item => {
          let eDepartment = this.departmentService.getDepartment(item.payload.val()['eDepartment']);
          return {
            $key: item.key,
            eDepartment,
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
      console.log('ss');
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
        pdf.text('Employee LIst of Suguna Texttile', 10, 10);
        var position = 0;  

        pdf.addImage(contentDataURL, 'PNG',0, position, imgWidth, imgHeight)  
        pdf.save('employee.pdf'); // Generate PDF  
        this.notificationService.success('Printed Succesfully!' ); 
      });  
    }

}
