import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'

import { AppState } from '../reducers'
import { AuthActions } from '../auth/action-types'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { isLoggedIn } from '../auth/auth.selectors'
import { isLoggedOut } from './../auth/auth.selectors'
import { map } from 'rxjs/operators'

@Component({
	selector: 'bkst-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	isLoggedIn$: Observable<boolean>
	isLoggedOut$: Observable<boolean>

	constructor(private store: Store<AppState>, private router: Router) {}

	ngOnInit(): void {
		// this.store.subscribe((state) => console.log(state))
		this.isLoggedIn$ = this.store.pipe(select(isLoggedIn))
		this.isLoggedOut$ = this.store.pipe(select(isLoggedOut))
	}

	logout() {
		this.store.dispatch(AuthActions.logout())
		// this.router.navigate(['login'])
	}
}
