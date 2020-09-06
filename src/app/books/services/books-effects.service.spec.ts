import { TestBed } from '@angular/core/testing'

import { BooksEffectsService } from './books-effects.service'

describe('BooksEffectsService', () => {
	let service: BooksEffectsService

	beforeEach(() => {
		TestBed.configureTestingModule({})
		service = TestBed.inject(BooksEffectsService)
	})

	it('should be created', () => {
		expect(service).toBeTruthy()
	})
})
