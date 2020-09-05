import { Component, OnInit } from '@angular/core'

import { AppState } from 'src/app/reducers'
import { AuthActions } from '../action-types'
import { AuthService } from './../auth.service'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { noop } from 'rxjs'
import { tap } from 'rxjs/operators'

@Component({
	selector: 'bkst-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	loginForm
	constructor(
		private authService: AuthService,
		private formBuilder: FormBuilder,
		private router: Router,
		private store: Store<AppState>
	) {
		this.loginForm = this.formBuilder.group({
			username: '',
			password: '',
		})
	}

	ngOnInit(): void {}

	login(userData) {
		this.authService
			.login(userData.username, userData.password)
			.pipe(
				tap((user) => {
					console.log(user)
					this.store.dispatch(AuthActions.login({ user }))
					this.router.navigate(['home'])
				})
			)
			.subscribe(noop, () => {
				console.log('Error Logging In')
			})
		return false
	}
}
