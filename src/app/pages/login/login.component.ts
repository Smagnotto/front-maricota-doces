import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  submitted: boolean = false;

  constructor(
    private loginService: LoginService,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const email: string = form.get('email')?.value;
      const password: string = form.get('password')?.value;

      this.loginService
        .login(email, password)
        .then((result: any) => {
          this.ngZone.run(() => {
            this.router.navigate(['/']);
          });
          this.loginService.setUserData(result.user);
        })
        .catch((error: any) => {
          console.log(error);

          //Adding feedback
        })
    }
    this.submitted = true;
  }
}
