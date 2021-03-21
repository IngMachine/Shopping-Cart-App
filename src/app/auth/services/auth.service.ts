import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  createUser(firstName: string, lastName: string, email: string, password: string): void {
    this.afAuth.createUserWithEmailAndPassword( email, password)
               .then( resp => {
                 console.log( `resp de firabase cuando creo un usuario correctamente: `, resp );
                 this.router.navigate(['/', 'home']);
                })
               .catch( err => {
                 console.log( err );
               });
  }

  login(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password)
              .then( resp => {
                console.log( `resp de firabase cuando Inicia session un usuario correctamente: `, resp );
                this.router.navigate(['/', 'home']);
               })
              .catch( err => {
                console.log( err );
              });
  }
  logout(): void {
    this.afAuth.signOut();
  }
}
