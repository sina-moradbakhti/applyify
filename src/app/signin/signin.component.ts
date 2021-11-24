import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  constructor() { }

  ngOnInit(): void {
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'ایمیل وارد نشده است';
    }

    return this.email.hasError('email') ? 'ایمیل وارد شده نا معتبر است' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'رمز عبور را وارد نشده است';
    }

    return this.password.hasError('length') ? 'رمز عبور باید حداقل ۶ کاراکتر باشد' : '';
  }

}
