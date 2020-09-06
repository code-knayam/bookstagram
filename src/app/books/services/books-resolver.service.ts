import { AppState } from 'src/app/reducers'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import {
	Resolve,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
} from '@angular/router'
import { tap, first, finalize } from 'rxjs/operators'
import { BookActions } from '../action-types'

@Injectable({
	providedIn: 'root',
})
export class BooksResolverService implements Resolve<any> {
	loading = false
	constructor(private store: Store<AppState>) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<any> {
		return this.store.pipe(
			tap(() => {
				if (!this.loading) {
					this.loading = true
					this.store.dispatch(BookActions.loadAllBooks())
				}
			}),
			first(),
			finalize(() => {
				this.loading = false
			})
		)
	}
}
