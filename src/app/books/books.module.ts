import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BooksRoutingModule } from './books-routing.module'
import { BooksComponent } from './books.component'
import { BookFormComponent } from './book-form/book-form.component'
import { BookListComponent } from './book-list/book-list.component'

@NgModule({
	declarations: [BooksComponent, BookFormComponent, BookListComponent],
	imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}