import { Component, OnInit, ViewChild } from '@angular/core';
import { DeliveryAddRiderComponent } from './../delivery-add-rider/delivery-add-rider.component';
import 'jspdf-autotable';
import html2canvas from 'html2canvas'
import { MatTableDataSource } from '@angular/material/table';
import { DeliveryService } from 'src/app/shared/delivery.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-delivery-rider-list',
  templateUrl: './delivery-rider-list.component.html',
  styleUrls: ['./delivery-rider-list.component.css']
})
export class DeliveryRiderListComponent implements OnInit {

  constructor(private service : DeliveryService,
    private dialog: MatDialog,) { }
 
  listDataa: MatTableDataSource<any>;
  
  displayedColumns: string[] =[`#`,`riderName`,`riderAddress`,`riderMobile`,`riderEmail`,`bikenumber`,`actions`];
  
      @ViewChild(MatSort,{static: true}) sort: MatSort;
      @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
      searchKey: string;

  ngOnInit() {
    this.service.getDelivery().subscribe(
      list => {
        let array = list.map(item =>{
          return {
            $keys: item.key,
            ...item.payload.val()
          };
        });
        this.listDataa = new MatTableDataSource(array);
        this.listDataa.sort = this.sort;
        this.listDataa.paginator = this.paginator;
      }
    );
  }

  

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listDataa.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(DeliveryAddRiderComponent,dialogConfig);
  }


  onEdit(row: any){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    this.dialog.open(DeliveryAddRiderComponent,dialogConfig);
  }

  onDelete($keys){
    this.service.deleteDelivery($keys);
  }

  print(){
    var data = document.getElementById("deliverRiderList");  
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
      pdf.save('riderList.pdf'); // Generated PDF   
    });  
  }

}