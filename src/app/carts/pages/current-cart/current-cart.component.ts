import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducers';
import { Product } from '../../../products/models/product';
import Swal from 'sweetalert2';

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

@Component({
  selector: 'app-current-cart',
  templateUrl: './current-cart.component.html'
})
export class CurrentCartComponent implements OnInit {
  data: ItemData[] = [];
  currentCart: Product[] = [];


  ngOnInit(): void {
    this.cartsService.initCartsListener();
    this.store.select('cart').subscribe( cartCurrent => this.currentCart = cartCurrent.product );
  }

  constructor(
    private cartsService: CartsService,
    public store: Store<AppState>
  ) {}

  eliminar(product: Product): void {
    this.cartsService.borrarProductCart( product.idCart )
    .then( () => {
      Swal.fire('Elemento eliminado', product.name , 'warning');
    });
  }

}
