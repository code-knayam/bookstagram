import { BooksState } from './reducers/books.reducers'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import * as fromBooks from './reducers/books.reducers'

export const selectBooksState = createFeatureSelector<BooksState>('books')

export const selectAllBooks = createSelector(
	selectBooksState,
	fromBooks.selectAll
)
