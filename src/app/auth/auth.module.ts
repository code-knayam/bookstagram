import { AuthRoutingModule } from './auth-routing.module'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { RegisterComponent } from './register/register.component'

@NgModule({
	declarations: [LoginComponent, RegisterComponent],
	imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
