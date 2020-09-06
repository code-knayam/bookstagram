import { selectAllBooks } from './../books.selectors'
import { AppState } from 'src/app/reducers'
import { Store, select } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'

import { Book } from '../models/book.model'
import { BooksService } from './../services/books.service'
import { Observable } from 'rxjs'

@Component({
	selector: 'bkst-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
	books$: Observable<Book[]>
	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.reload()
	}

	reload() {
		this.books$ = this.store.pipe(select(selectAllBooks))
		// this.books$ = this.bookService.findAllBooks()
	}
}
