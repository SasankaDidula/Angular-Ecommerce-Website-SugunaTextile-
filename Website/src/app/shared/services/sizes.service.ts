import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from "angularfire2/database";
import { tap, map } from 'rxjs/operators';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  /*sizesList:AngularFireList<any>;
  array=[];*/

  constructor(private firebase :AngularFireDatabase) {
    /*this.sizesList = this.firebase.list('sizes');
    this.sizesList.snapshotChanges().subscribe(
      list => {
        this.array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
   }*/
}

getSizes(){
  //return this.db.list('/categories/').valueChanges();
  return this.firebase.list('/sizes').snapshotChanges().pipe(
    map(actions => actions.map(a => {   
      const data = a.payload.val() as Products;
      const key = a.key;
      return { key, ...data };
    }))
  );
}
}
