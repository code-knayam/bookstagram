import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from './../models/user.model'

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}

	login(username: string, password: string): Observable<User> {
		// TODO: implement auth API
		return this.http.get<User>('http://localhost:3000/users/1')
	}
}
