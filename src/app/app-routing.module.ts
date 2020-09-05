import { RouterModule, Routes } from '@angular/router'

import { AuthGuard } from './auth/auth.guard'
import { NgModule } from '@angular/core'

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./auth/auth.module').then((m) => m.AuthModule),
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./books/books.module').then((m) => m.BooksModule),
		canActivate: [AuthGuard],
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
