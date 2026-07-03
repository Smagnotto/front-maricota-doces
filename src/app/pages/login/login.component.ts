import { Component, NgZone, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastMessageOptions } from 'primeng/api';
import { LoginService } from './service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LoginComponent implements OnInit {
  formLogin: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required]),
  });

  error: boolean = false;
  isLoading: boolean = false;
  returnUrl: string;

  mensagem: ToastMessageOptions[] = [
    { severity: 'error', summary: 'Erro', detail: 'Usuário ou senha inválida' },
  ];

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {
    if (this.loginService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }

  onSubmit(form: UntypedFormGroup) {
    if (form.valid) {
      this.isLoading = true;
      this.error = false;

      const email: string = form.get('email')?.value;
      const password: string = form.get('password')?.value;

      this.loginService
        .login(email, password)
        .then(() => {
          this.router.navigate([this.returnUrl]);
          this.error = false;
          this.isLoading = false;
        })
        .catch(() => {
          this.error = true;
          this.isLoading = false;
        });
    }
    form.markAllAsTouched();
  }
}
