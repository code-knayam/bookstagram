import { Component, OnInit } from '@angular/core'

import { Book } from './models/book.model'
import { BooksService } from './services/books.service'
import { Observable } from 'rxjs'

@Component({
	selector: 'bkst-books',
	templateUrl: './books.component.html',
	styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
	constructor(private booksService: BooksService) {}

	ngOnInit(): void {}

	reload() {
		this.books$ = this.booksService.findAllBooks()
	}
}
