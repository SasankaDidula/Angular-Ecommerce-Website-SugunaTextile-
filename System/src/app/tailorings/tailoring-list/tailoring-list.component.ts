import { Component, OnInit,ViewChild } from '@angular/core';
import { TailoringService } from 'src/app/shared/tailoring.service';
import { TailoringComponent } from '../tailoring/tailoring.component';
import { NotificationService } from 'src/app/shared/notification.service';
import * as jsPDF from 'jspdf'; 
import html2canvas from 'html2canvas';
import { MatPaginator } from "@angular/material/paginator";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-tailoring-list',
  templateUrl: './tailoring-list.component.html',
  styleUrls: ['./tailoring-list.component.css']
})
export class TailoringListComponent implements OnInit {

  constructor(private service: TailoringService,
    private dialog: MatDialog,
    private notificationService: NotificationService) 
       { }

  listData: MatTableDataSource<any>;
  displayedColumns: String[] = ['orderID','customerID','username','chest','shoulder','arms','frontNeck','backNeck','length','actions']

  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getTailorings().subscribe(
      list => {
        let array =list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
          
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  
  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "95%";
    this.dialog.open(TailoringComponent,dialogConfig);
  }
  

  onEdit(row){
    this.service.populateForm(row);
    const diologConfig = new MatDialogConfig();
    diologConfig.disableClose = true;
    diologConfig.autoFocus = true;
    diologConfig.width = "60%";
    this.dialog.open(TailoringComponent,diologConfig);
  }

  onDelete($key){
    if(confirm('Aru you sure to delete this record?')){
    this.service.deleteTailoring($key);
    this.notificationService.warn('! Deleted Successfully');
    }
  }


  
  print(){
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
      pdf.save('Tailoring.pdf'); // Generated PDF   
    });  
  }
}
