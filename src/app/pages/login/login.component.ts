import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'primeng/api';
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
  error: boolean = false;
  isLoading: boolean = false;
  returnUrl: string;

  mensagem: Message[] = [
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

  onSubmit(form: FormGroup) {
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
    this.submitted = true;
  }
}
