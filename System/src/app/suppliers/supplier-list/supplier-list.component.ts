import { NotificationService } from './../../shared/notification.service';
import { Component, OnInit , ViewChild} from '@angular/core';
import { SupplierComponent } from "./../supplier/supplier.component";
import { SuppliersService } from '../../shared/suppliers.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  constructor(public service : SuppliersService,
     private dialog: MatDialog,
     private NotificationService :NotificationService
     ) { }

  listData: MatTableDataSource<any>;
  x:MatTableDataSource<any>;
  
  displayedColumns: string[] =[`supName`,`compName`,`email`,`mobile`,`address`,`actions`];
  supplierList :  string[] = [];
  supplysumList : number[] = [] ;
  arr : any[] = [];
  sumsup : number = 0;
  companyNameList: any[] = [];
  key : string;

  BarChart=[];
  expandedElement : MatTableDataSource<any>;

  @ViewChild(MatSort,{static: true}) sort: MatSort;
    @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
    searchKey: string;

  ngOnInit(): void {
    
    this.service.getSuppliers().subscribe(
      list => {
        let array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val(), //will return suppliers details         
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
    
      });


      
    }
  

// console.log(this.companyNameList);
// console.log(this.supplysumList);



onSearchClear() {
  this.searchKey = "";
  this.applyFilter();
}

applyFilter() {
  this.listData.filter = this.searchKey.trim().toLowerCase();
}

onCreate() {
  this.service.initializeFormGroup();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(SupplierComponent,dialogConfig);
}

onEdit(row){
  this.service.populateForm(row);
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(SupplierComponent,dialogConfig);
}


onDelete($key){
  if(confirm('Are You sure You want to delete this record?'))
  {
  this.service.deleteSupplier($key);
  this.NotificationService.warn('! Deleted Successfully');
  }
}

  


getkey() : string {
  return this.key;
}

}