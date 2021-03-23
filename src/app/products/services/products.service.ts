import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, filter } from 'rxjs/operators';
import { Product } from '../models/product';
import { SetProductsAction } from '../../store/actions/products.action';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productListenerSubscrition: Subscription = new Subscription();

  constructor(
    private store: Store<AppState>,
    private afDB: AngularFirestore
  ) { }

   productsItems(): void {
    // docData es la data en forma de array devuelta por firebase.
    /*
      SnapchotChanges me sirve para tener los id y poder eliminarlo
      ValuesChanges no me duevuelve el id del documento lo que haria mas dificil
      eliminarlo
    */
    this.productListenerSubscrition = this.afDB.collection(`products`)
             .snapshotChanges()
             .pipe(
              //  Tranformar el flujo que viene por el snapshotChange
              map( docData => {
                return docData.map( doc => {
                  return {
                    id: doc.payload.doc.id,
                    ...doc.payload.doc.data() as {}
                  };
                });
              })
             )
            //  Deberia de ser tipo Product[] pero angular no puede identificar que le envia firbase.
             .subscribe( (collectionProducts: any[]) => {
               console.log(collectionProducts);
               this.store.dispatch( new SetProductsAction( collectionProducts ));
             });
  }

  cancelSubscription(): void {
    this.productListenerSubscrition.unsubscribe();
  }
}
