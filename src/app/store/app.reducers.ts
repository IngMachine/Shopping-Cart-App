import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers/index';

export interface AppState {
    ui: reducers.UIState;
    auth: reducers.AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: reducers.UIReducer,
    auth: reducers.authReducer
};
