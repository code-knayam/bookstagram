import { Book } from './models/book.model'
import { createAction, props } from '@ngrx/store'

export const loadAllBooks = createAction('[Books Resolver] Load All Courses')

export const allBooksLoaded = createAction(
	'[Load Books Effect] All Books Loaded',
	props<{ books: Book[] }>()
)
