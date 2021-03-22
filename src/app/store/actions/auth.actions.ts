import { Action } from '@ngrx/store';
import { User } from '../../auth/models/user.model';

export const SET_USER = '[AUTH] Set User';
export const UNSET_USER = '[AUTH] Unset User';

export class SetUser implements Action {
    readonly type = SET_USER;

    constructor( public user: User ){}
}

export class UnsetUser implements Action {
    readonly type = UNSET_USER;
}

export type actions = SetUser |
                      UnsetUser;
