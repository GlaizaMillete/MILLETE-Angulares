import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private firestore: AngularFirestore) { }

  getUser(uid: string): Observable<User> {
    return this.firestore.collection('users').doc<User>(uid).valueChanges() as Observable<User>;
  }

  saveUser(user: User) {
    return this.firestore.collection('users').doc(user.uid).set(user.toObject());
  }
  
}
