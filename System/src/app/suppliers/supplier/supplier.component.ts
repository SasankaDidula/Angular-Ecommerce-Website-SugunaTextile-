import { OrderTypesService } from './../../shared/order-types.service';
import { Component, OnInit } from '@angular/core';
import { SuppliersService } from "../../shared/suppliers.service";
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor(public service: SuppliersService,public ordType : OrderTypesService,     private notificationService : NotificationService,
    public dialogRef: MatDialogRef <SupplierComponent>) { }



ngOnInit() {
  this.service.getSuppliers();
}

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();


  }

  onSubmit(){
    if(this.service.form.valid){
      if (!this.service.form.get('$key').value)
      this.service.insertSupplier(this.service.form.value) // insert new employee to firebase DB collection
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
        compName:'ShaFashion',
        email:'shadinikalansooriya98@gmail.com',
        mobile:'0763792769',
        address:'Diloma, Aththalapitiya Road Bandarawela',
        oType:0,
    
    })
  }

}
