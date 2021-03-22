import * as fromAuth from '../actions/auth.actions';
import { User } from '../../auth/models/user.model';

export interface AuthState {
    user: User;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false
};

export function authReducer( state = initialState, action: fromAuth.actions ): AuthState {
    switch ( action.type ) {
        case fromAuth.SET_USER:
            return {
                user: { ... action.user },
                isAuthenticated: true
            };
        case fromAuth.UNSET_USER:
            return {
                user: null,
                isAuthenticated: false
            };
        default:
            return state;
    }
}
