
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'; 
import { Appuser } from '../models/app-user';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  get(uid: string): Observable<Appuser> { 
    return this.db.object<Appuser>('/users/' + uid).valueChanges();
  }
}
