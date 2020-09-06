import { Book } from './../models/book.model'
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { createReducer, on } from '@ngrx/store'
import { BookActions } from '../action-types'

export interface BooksState extends EntityState<Book> {}

export const adapter = createEntityAdapter<Book>({
	selectId: (book: Book) => book.id,
})

export const initialBooksState = adapter.getInitialState()

export const booksReducer = createReducer(
	initialBooksState,
	on(BookActions.allBooksLoaded, (state, action) =>
		adapter.setAll(action.books, state)
	)
)

export const { selectAll } = adapter.getSelectors()
