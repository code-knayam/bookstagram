import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AuthState } from './reducers'
import { create } from 'domain'

export const selectAuthState = createFeatureSelector<AuthState>('auth')

export const isLoggedIn = createSelector(
	selectAuthState,
	(auth) => !!auth && !!auth.user
)

export const isLoggedOut = createSelector(
	isLoggedIn,
	(isLoggedIn) => !isLoggedIn
)
