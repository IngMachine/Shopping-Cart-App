import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.scss']
})
export class ProductsAllComponent implements OnInit, OnDestroy {

  subscriptionProducts: Subscription = new Subscription();

  datos: Product[];

  constructor(
    private productsService: ProductsService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.productsService.productsItems();
    this.subscriptionProducts = this.store.select('product')
                                          .subscribe( items => {
                                            this.datos = items.products;
                                          })
  }

  ngOnDestroy(): void {
    this.productsService.cancelSubscription();
    this.subscriptionProducts.unsubscribe();
  }

}
