import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { SigninRequestPayload } from './signin-request.payload';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  signinRequestPayload: SigninRequestPayload;
  registerSuccessMessage: string;
  isError: boolean;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.signinRequestPayload = {
      username: '',
      password: '',
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  //sending Login data to server through service and getting back response
  login() {
    this.signinRequestPayload.username = this.loginForm.get('username').value;
    this.signinRequestPayload.password = this.loginForm.get('password').value;
    this.authService.login(this.signinRequestPayload).subscribe(
      (data) => {
        console.log('success');
        this.isError = false;
        this.router.navigateByUrl('/adminhome');
        this.toastr.success('Login Successful');
      },
      (error) => {
        this.isError = true;
        throwError(error);
        this.toastr.error('Login Failed');
      }
    );
  }
}
