import { Action } from '@ngrx/store';
import { Product } from '../../products/models/product';

export const SELECT_ALL_PRODUCT_CART = '[CART] Select Product Cart';
export const DESELECT_ALL_PRODUCT_CART = '[CART] Deselect Product Cart';

export class SelectAllProductCart implements Action {
    readonly type = SELECT_ALL_PRODUCT_CART;

    constructor( public products: Product[]) {}
}

export class DeselectAllProductCart implements Action {
    readonly type = DESELECT_ALL_PRODUCT_CART;
}

export type cartActions = SelectAllProductCart |
                          DeselectAllProductCart;
