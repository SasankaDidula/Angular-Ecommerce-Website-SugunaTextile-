import { Component, OnInit } from '@angular/core';
import { SuppliersService } from "../../shared/suppliers.service";
import { OrderTypesService } from "../../shared/order-types.service";
import { NotificationService } from "src/app/shared/notification.service";
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(public service: SuppliersService,
    public ordType : OrderTypesService,
    public notificationService : NotificationService,
    public dialogRef: MatDialogRef <SupplierComponent> ) { }

    id : number = 0;
    listData: MatTableDataSource<any>;
  ngOnInit() {
    this.service.getSuppliers();
    this.service.getSuppliers().subscribe(
      list => {
        let array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val(),          
          };
        });
        this.listData = new MatTableDataSource(array);

        this.id = array.length;
    }
    );



  }



  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();

  }

  onSubmit(){
    if(this.service.form.valid){
      if (!this.service.form.get('$key').value){
        this.id = this.id + 1;
      this.service.insertSupplier(this.service.form.value,this.id);
      }
      else
      this.service.updateSupplier(this.service.form.value);
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





demo(){

  this.service.form.setValue({

    $key:null,
      supName:'Shadini',
      compName:'ShadiniFashion',
      email:'shadinikalansooriya98@gmail.com',
      mobile:'0763792769',
      address:'Urban Homes, koswatte',
      oType:0,
  
  })
}
}