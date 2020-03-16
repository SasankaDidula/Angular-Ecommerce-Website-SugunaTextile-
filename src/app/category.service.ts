import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(){
    //return this.db.list('/categories/').valueChanges();
    return this.db.list('/categories').snapshotChanges();
  }
}
