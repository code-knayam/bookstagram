import { Book } from '../models/book.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
	providedIn: 'root',
})
export class BooksService {
	constructor(private http: HttpClient) {}

	findAllBooks(): Observable<Book[]> {
		return this.http.get<Book[]>('http://localhost:3000/books')
	}
}
