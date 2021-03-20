import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Route system
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Custom modules
import { NgZorroModule } from '../ngzorro/ngzorro.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgZorroModule
  ]
})
export class AuthModule { }
