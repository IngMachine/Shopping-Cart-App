import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../../products/models/product';
import { User } from '../../auth/models/user.model';
import { SelectAllProductCart, DeselectAllProductCart } from '../../store/actions/cart.actions';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  cartsListernetSubcription: Subscription = new Subscription();
  cartsItemsSubscription: Subscription = new Subscription();


  constructor(
    private authService: AuthService,
    private store: Store<AppState>,
    private afDB: AngularFirestore
  ) { }

  initCartsListener(): void {
    this.cartsListernetSubcription = this.store.select('auth')
                                            .pipe(
                                              filter( auth => auth.user != null)
                                            )
                                            .subscribe(
                                              auth => this.cartCurrentItems( auth.user.uid )
                                            );
  }

  private cartCurrentItems( uid: string ): void {
    this.cartsItemsSubscription = this.afDB.collection(`usuarios/${ uid }/carritos`)
                                                  .snapshotChanges()
                                                  .pipe(
                                                    map( docData => {
                                                      return docData.map( doc => {
                                                        console.log(doc);
                                                        return {
                                                          idCart: doc.payload.doc.id,
                                                          ...doc.payload.doc.data() as {}
                                                        };
                                                      });
                                                    })
                                                    )
                                                    .subscribe( (coleccion: any[])  => {
                                                      console.log(coleccion);
                                                      this.store.dispatch( new SelectAllProductCart( coleccion ) );
                                                    });
  }

  cancelarSubscriptions(): void {
    this.cartsItemsSubscription.unsubscribe();
    this.cartsListernetSubcription.unsubscribe();
    this.store.dispatch( new DeselectAllProductCart() );
  }


  addProductCart(product: Product): void {
    const user: User = this.authService.getUser();
    this.afDB.doc(`usuarios/${user.uid}/`)
             .collection('carritos').add({...product});

  }

  borrarProductCart( uidCart: string ): Promise < void > {
    const user = this.authService.getUser();
    return this.afDB.doc(`usuarios/${ user.uid }/carritos/${ uidCart }`)
               .delete();
  }
}
