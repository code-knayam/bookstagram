import { Component, OnInit } from '@angular/core'

import { AppState } from './reducers'
import { AuthActions } from './auth/action-types'
import { Store } from '@ngrx/store'

@Component({
	selector: 'bkst-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'bookstagram'
	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		const userProfile = localStorage.getItem('user')
		if (userProfile) {
			this.store.dispatch(
				AuthActions.login({ user: JSON.parse(userProfile) })
			)
		}
	}
}
