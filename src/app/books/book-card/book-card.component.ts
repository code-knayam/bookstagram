import { Book } from './../models/book.model'
import { Component, OnInit, Input } from '@angular/core'

@Component({
	selector: 'bkst-book-card',
	templateUrl: './book-card.component.html',
	styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
	@Input() book: Book
	constructor() {}

	ngOnInit(): void {}

	edit() {}

	remove() {}
}
