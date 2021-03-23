import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';

import Swal from 'sweetalert2';

import { User, DataObj } from '../models/user.model';
import { ActivateLoadingAction, DisableLoadingAction } from '../../store/actions/ui.actions';
import { AppState } from 'src/app/store/app.reducers';
import { SetUser } from 'src/app/store/actions/auth.actions';
import { UnsetUser } from '../../store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSusbcription: Subscription;
  private user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private afDB: AngularFirestore,
    private router: Router,
    private store: Store<AppState>
  ) { }

  // Escuchar informacion de usuario activo de firabase.
  initAuthListener(): void {
    // fbUser => es la informacion del usuario recibida por Firabase.
    this.afAuth.authState
               .subscribe( (fbUser: firebase.User) => {
                 if ( fbUser ){
                   this.userSusbcription = this.afDB.doc(`usuarios/${ fbUser.uid }/usuario/${ fbUser.uid }`)
                                                    .valueChanges()
                                                    .subscribe( (userObj: DataObj) => {
                                                       const newUser = new User( userObj );
                                                       this.store.dispatch( new SetUser( newUser ));
                                                       console.log( newUser );
                                                       this.user = newUser;
                                                     });
                 } else {
                   this.user = null;
                   this.userSusbcription?.unsubscribe();
                 }
               });
  }

  createUser(firstName: string, lastName: string, email: string, password: string): void {
    this.store.dispatch( new ActivateLoadingAction() );
    this.afAuth.createUserWithEmailAndPassword( email, password)
               .then( resp => {
                  //  console.log( `resp de firabase cuando creo un usuario correctamente: `, resp );
                  const user: User = {
                    uid: resp.user.uid,
                    firstName,
                    lastName,
                    email
                  };

                  this.afDB.doc(`usuarios/${ user.uid }/usuario/${ user.uid }`)
                           .set( user )
                           .then( () => {
                             this.store.dispatch( new DisableLoadingAction() );
                             this.router.navigate(['/', 'home']);
                           });
                })
               .catch( err => {
                //  console.log( err );
                 this.store.dispatch( new DisableLoadingAction() );
                 Swal.fire('Error en el login', err.message , 'error' );
               });
  }

  login(email: string, password: string): void {
    this.store.dispatch( new ActivateLoadingAction() );
    this.afAuth.signInWithEmailAndPassword(email, password)
              .then( resp => {
                // console.log( `resp de firabase cuando Inicia session un usuario correctamente: `, resp );
                this.store.dispatch( new DisableLoadingAction() );
                this.router.navigate(['/', 'home']);
               })
              .catch( err => {
                // console.log( err );
                this.store.dispatch( new DisableLoadingAction() );
                Swal.fire('Error en el login', err.message , 'error' );
              });
  }

  logout(): void {
    this.router.navigate(['/auth']);
    this.afAuth.signOut();
    this.store.dispatch( new UnsetUser() );
  }

  isAuth(): Observable<boolean>{
    return this.afAuth.authState
                      .pipe(
                        map( fbUser => {
                          if ( fbUser === null ) {
                            this.router.navigate(['/auth']);
                          }
                          return fbUser != null;
                        })
                      );
  }

  getUser(): User {
    return { ...this.user };
  }
}
