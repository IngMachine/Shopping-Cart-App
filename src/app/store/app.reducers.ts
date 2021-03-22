import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers/index';

export interface AppState {
    ui: reducers.UIState;
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: reducers.UIReducer
};
