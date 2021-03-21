import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  // Escuchar informacion de usuario activo de firabase.
  initAuthListener(): void {
    this.afAuth.authState
                // fbUser => es la informacion del usuario recibida por Firabase.
               .subscribe( (fbUser: firebase.User) => {
                 console.log( fbUser );
               });
  }

  createUser(firstName: string, lastName: string, email: string, password: string): void {
    this.afAuth.createUserWithEmailAndPassword( email, password)
               .then( resp => {
                 console.log( `resp de firabase cuando creo un usuario correctamente: `, resp );
                 this.router.navigate(['/', 'home']);
                })
               .catch( err => {
                 console.log( err );
                 Swal.fire('Error en el login', err.message , 'error' );
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
                Swal.fire('Error en el login', err.message , 'error' );
              });
  }

  logout(): void {
    this.router.navigate(['/auth']);
    this.afAuth.signOut();
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
}
