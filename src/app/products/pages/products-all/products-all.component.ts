import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-all',
  templateUrl: './products-all.component.html',
  styleUrls: ['./products-all.component.scss']
})
export class ProductsAllComponent implements OnInit, OnDestroy {
  obj1: any = {
    title: 'Fredy sirve',
  };
  obj2: any = {
    title: 'Fredy  no sirve',
  };

  datos: any[] = [this.obj1, this.obj2, this.obj1, this.obj1];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.productsItems();
  }

  ngOnDestroy(): void {
    this.productsService.cancelSubscription();
  }

}
