import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createReducer,
	createSelector,
	on,
} from '@ngrx/store'

import { AuthActions } from '../action-types'
import { User } from './../../models/user.model'
import { environment } from './../../../environments/environment.prod'

export const authFeatureKey = 'auth'

export interface AuthState {
	user: User
}

export const initialAuthState: AuthState = {
	user: undefined,
}
// export const reducers: ActionReducerMap<AuthState> = {}

export const authReducer = createReducer(
	initialAuthState,
	on(AuthActions.login, (state, action) => {
		return {
			user: action.user,
		}
	}),
	on(AuthActions.logout, (state, action) => {
		return {}
	})
)
