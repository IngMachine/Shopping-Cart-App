import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RequiredFields } from '../interfaces/required-fields.interface';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  validateForm!: FormGroup;
  loading: boolean;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
    this.subscription = this.store.select('ui')
                                  .subscribe( ui => this.loading = ui.isLoading );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const valueForm: RequiredFields = this.validateForm.value;
    const { firstName, lastName, email , password } = valueForm;
    this.authService.createUser(firstName, lastName, email, password);
  }

}


