import { Action } from '@ngrx/store';
import { Product } from '../../products/models/product';

export const SET_PRODUCTS = '[PRODUCTS] Set Items Products';
export const UNSET_PRODUCTS = '[PRODUCTS] Unset Items Products';

export class SetProductsAction implements Action {
    readonly type = SET_PRODUCTS;

    constructor( public products: Product[] ) { }
}

export class UnsetProductsAction implements Action {
    readonly type = UNSET_PRODUCTS;
}

export type pruductsActions = SetProductsAction |
                              UnsetProductsAction;
