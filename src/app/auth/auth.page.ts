import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../@modules/alert/services/alert.service';
import { LoaderService } from '../@modules/alert/services/loader.service';
import { AuthenticationService } from '../@modules/authentication';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthenticationService,
    private alert: AlertService,
    private loader: LoaderService
  ) {}

  ngOnInit() {}

  submit() {
    this.authService.login(this.loginForm.getRawValue()).subscribe();
  }
}
