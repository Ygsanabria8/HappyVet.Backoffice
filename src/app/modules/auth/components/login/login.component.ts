import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ) { 
    this.buildLoginForm();
  }

  login(): void {
    console.log(this.loginForm);
  }

  buildLoginForm(): void {
    this.loginForm = this._fb.group({
      email: this._fb.control<string>('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
      password: this._fb.control<string>('',{nonNullable: true, validators:[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]})
    });
  }

  get Email(): AbstractControl {
    return this.loginForm.get('email') as AbstractControl;
  }

  get Password(): AbstractControl {
    return this.loginForm.get('password') as AbstractControl;
  }

}
