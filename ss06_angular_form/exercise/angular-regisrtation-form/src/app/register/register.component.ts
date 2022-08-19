import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Register} from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  register: Register;
  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      country: new FormControl('vietnam', [Validators.required]),
      age: new FormControl('', [Validators.required, this.regexAge]),
      gender: new FormControl('male', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(' /^\\+84\\d{9,10}$/')]),
    });
    console.log(this.registerForm.value);
    this.register = this.registerForm.value;
  }

  submitRegister() {
    this.register = this.registerForm.value;
  }

  regexAge(control: AbstractControl) {
    // tslint:disable-next-line:no-debugger
    debugger;
    const value = control.value;
    if (value < 18) {
      return {age: true};
    } else {
      return null;
    }
  }
  // regexPassword(control: AbstractControl) {
  //   // tslint:disable-next-line:no-debugger
  //   debugger;
  //   const value = control.value;
  //   if (value === this.register.password) {
  //     return {confirmPassword: true};
  //   } else {
  //     return null;
  //   }
  // }
}
