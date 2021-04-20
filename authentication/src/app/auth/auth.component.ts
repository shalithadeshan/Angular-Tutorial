import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {AuthResponseData} from './auth-response-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private authService: AuthService, private router: Router) {
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(authForm: NgForm) {
    // console.log(authForm.value);
    if (!authForm.valid) {
      return;
    } // extra validation
    const email = authForm.value.email;
    const password = authForm.value.password;
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      // @ts-ignore
      authObs = this.authService.login(email, password);
        // .subscribe(
        // resData => {
        //   console.log(resData);
        //   this.isLoading = false;
        // },
        // errorMessage => {
        //   console.log(errorMessage);
        //   this.error = errorMessage;
        //   this.isLoading = false;
        // });
    } else {
      // @ts-ignore
      authObs = this.authService.signup(email, password);
      //   .subscribe(
      //   resData => {
      //     console.log(resData);
      //     this.isLoading = false;
      //   },
      //   errorMessage => {
      //     console.log(errorMessage);
      //     // this.errorRes = 'AN error occurred';
      //     // switch (errorRes.error.error.message) {
      //     //   case 'EMAIL_EXISTS':
      //     //     this.error = 'This email exists already';
      //     // }
      //     this.error = errorMessage;
      //     this.isLoading = false;
      //   }
      // );
    }
    authObs.subscribe(
      resData => {
          console.log(resData);
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        errorMessage => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.isLoading = false;
        }
    );
     // forward extracted data
    authForm.reset();
  }
}
