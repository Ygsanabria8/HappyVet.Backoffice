import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  accountForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
  ){
    this.buildAccountForm();
  }

  createAccount(): void {
    console.log(this.accountForm);
  }

  buildAccountForm(): void {
    this.accountForm = this._fb.group({
      name: this._fb.control<string>('',{nonNullable: true, validators:[Validators.required, Validators.minLength(3)]}),
      phonenumber: this._fb.control<string>('',{nonNullable: true, validators:[Validators.required, Validators.minLength(6), Validators.maxLength(10)]}),
      birthday: this._fb.control<Date | string>('',{nonNullable: true, validators:[Validators.required]}),
      email: this._fb.control<string>('',{nonNullable: true, validators:[Validators.required, Validators.email]}),
      password: this._fb.control<string>('',{nonNullable: true, validators:[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]}),
      confirmPassword: this._fb.control<string>('',{nonNullable: true, validators:[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]}),
    });
  }

  get Name(): AbstractControl {
    return this.accountForm.get('name') as AbstractControl;
  }

  get Phonenumber(): AbstractControl {
    return this.accountForm.get('phonenumber') as AbstractControl;
  }

  get Birthday(): AbstractControl {
    return this.accountForm.get('birthday') as AbstractControl;
  }

  get Email(): AbstractControl {
    return this.accountForm.get('email') as AbstractControl;
  }

  get Password(): AbstractControl {
    return this.accountForm.get('password') as AbstractControl;
  }

  get ConfirmPassword(): AbstractControl {
    return this.accountForm.get('confirmPassword') as AbstractControl;
  }

}
