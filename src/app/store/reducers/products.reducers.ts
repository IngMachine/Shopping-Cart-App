import * as fromProducts from '../actions';
import { Product } from '../../products/models/product';

export interface ProductsState {
    products: Product[];
}

const initialState: ProductsState = {
    products: []
};

export function productsReducer( state = initialState, action: fromProducts.pruductsActions): ProductsState {

    switch ( action.type ) {
        case fromProducts.SET_PRODUCTS:
            return {
                // Destruir relación entre firabase y angular.
                products: [
                    ... action.products.map( product => {
                        return {
                            ...product
                        };
                    })
                ]
            };
        case fromProducts.UNSET_PRODUCTS:
            return {
                products: []
            };
        default:
            return state;
    }
}
