import { Product } from '../../products/models/product';
import * as fromCart from '../actions'

export interface CartState {
    product: Product[];
    // status: boolean;
}

const initialState: CartState = {
    product: []
};

export function cartReducer( state = initialState, action: fromCart.cartActions): CartState {
    switch ( action.type ) {
        case fromCart.SELECT_ALL_PRODUCT_CART:
            return {
                product: [... action.products]
            };
        case fromCart.DESELECT_ALL_PRODUCT_CART:
            return {
                product: []
            };
        default:
            return state;
    }
}
