import { BooksResolverService } from './services/books-resolver.service'
import { RouterModule, Routes } from '@angular/router'

import { BookFormComponent } from './book-form/book-form.component'
import { BookListComponent } from './book-list/book-list.component'
import { BooksComponent } from './books.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
	{
		path: '',
		component: BooksComponent,
		children: [
			{
				path: '',
				component: BookListComponent,
				resolve: {
					books: BooksResolverService,
				},
			},
			{
				path: 'add',
				component: BookFormComponent,
			},
			{
				path: 'edit',
				component: BookFormComponent,
			},
		],
	},
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BooksRoutingModule {}
