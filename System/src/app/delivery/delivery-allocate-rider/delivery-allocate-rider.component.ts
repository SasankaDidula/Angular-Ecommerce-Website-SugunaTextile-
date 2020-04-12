import { Component, OnInit } from '@angular/core';
import { DeliveryAddService } from "../../shared/delivery-add.service";
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/notification.service';


@Component({
  selector: 'app-delivery-allocate-rider',
  templateUrl: './delivery-allocate-rider.component.html',
  styleUrls: ['./delivery-allocate-rider.component.css']
})
export class DeliveryAllocateRiderComponent implements OnInit {

  constructor(public service: DeliveryAddService,
    public notificationService : NotificationService,
    public dialogRef: MatDialogRef <DeliveryAllocateRiderComponent>) { }

    ngOnInit() {
      this.service.getDelivery();
    }
  
  
  
    onClear() {
      this.service.form.reset();
      this.service.initializeFormGroup();
  
    }
  
    onSubmit(){
      if(this.service.form.valid){
        if (!this.service.form.get('$key').value)
        this.service.insertDelivery(this.service.form.value)
        else
        this.service.updateDelivery(this.service.form.value);
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