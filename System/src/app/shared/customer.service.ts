import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  array=[];
  constructor(private firebase: AngularFireDatabase) {
    list => {
      this.array = list.map(item =>{
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    }
   }
   customerList:AngularFireList<any>

   getUsers(){
    this.customerList = this.firebase.list('users');
    return this.customerList.snapshotChanges();
  }
    
}
