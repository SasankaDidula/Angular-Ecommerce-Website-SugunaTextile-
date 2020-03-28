import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class OrderTypesService {

  OrderTypesList:AngularFireList<any>;
  array=[];

  constructor(private firebase :AngularFireDatabase) {
    this.OrderTypesList = this.firebase.list('orderTypes');
    this.OrderTypesList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
   }
}
