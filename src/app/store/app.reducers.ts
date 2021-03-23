import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
    ui: reducers.UIState;
    auth: reducers.AuthState;
    product: reducers.ProductsState;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: reducers.UIReducer,
    auth: reducers.authReducer,
    product: reducers.productsReducer
};
