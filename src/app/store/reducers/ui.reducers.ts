import * as fromUI from '../actions';

export interface UIState {
    isLoading: boolean;
    // TODO Agregar más propiedades de un estado si se necesita realizando sus acciones necesarias.
}

const initialState: UIState = {
    isLoading: false
};


export function UIReducer( state = initialState, action: fromUI.uiActions): UIState {
    switch ( action.type ) {
        case fromUI.ACTIVATE_LOADING:
            return {
                isLoading: true
            };
        case fromUI.DISABLE_LOADING:
            return {
                isLoading: false
            };
        default:
            return initialState;
    }
}
