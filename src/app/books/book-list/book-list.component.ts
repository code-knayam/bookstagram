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
	constructor(private bookService: BooksService) {}

	ngOnInit(): void {
		this.books$ = this.bookService.findAllBooks()
	}
}
