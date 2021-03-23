import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productsService.productsItems();
  }

  ngOnDestroy(): void{
    this.productsService.cancelSubscription();
  }
}
