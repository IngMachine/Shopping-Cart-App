import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartsService } from '../../../carts/services/carts.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  isAuth: boolean;


  constructor(
    private cartsService: CartsService,
    public store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select('auth')
              .subscribe( auth => {
                this.isAuth = auth.isAuthenticated;
                console.log(this.isAuth);
              } );
  }

  addProductCurrentCart(): void {
    if ( this.isAuth ) {
      console.log( this.product );
      this.cartsService.addProductCart( this.product );
    } else {
      this.router.navigate(['/auth/login'])
    }
  }

}
