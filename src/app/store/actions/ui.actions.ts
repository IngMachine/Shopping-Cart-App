import { Action } from '@ngrx/store';


export const ACTIVATE_LOADING = '[UI Loading] Loading...';
export const DISABLE_LOADING = '[UI Loading] End of charge...';

export class ActivateLoadingAction implements Action {
    readonly type = ACTIVATE_LOADING;
}

export class DisableLoadingAction implements Action {
    readonly type = DISABLE_LOADING;
}

export type uiActions = ActivateLoadingAction |
                        DisableLoadingAction;
