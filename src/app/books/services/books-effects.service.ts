import { BooksService } from './books.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core'
import { BookActions } from '../action-types'
import { concatMap, map } from 'rxjs/operators'

@Injectable({
	providedIn: 'root',
})
export class BooksEffectsService {
	loadCourses$ = createEffect(() =>
		this.actions$.pipe(
			ofType(BookActions.loadAllBooks),
			concatMap((action) => this.booksService.findAllBooks()),
			map((books) => BookActions.allBooksLoaded({ books }))
		)
	)

	constructor(
		private actions$: Actions,
		private booksService: BooksService
	) {}
}
