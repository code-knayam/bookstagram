import * as fromAuth from './reducers'

import { AuthRoutingModule } from './auth-routing.module'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RegisterComponent } from './register/register.component'
import { StoreModule } from '@ngrx/store'
import { authReducer } from './reducers/index'

@NgModule({
	declarations: [LoginComponent, RegisterComponent],
	imports: [
		CommonModule,
		AuthRoutingModule,
		HttpClientModule,
		ReactiveFormsModule,
		StoreModule.forFeature(fromAuth.authFeatureKey, authReducer),
	],
})
export class AuthModule {}
