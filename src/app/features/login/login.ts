import { Component, signal } from '@angular/core';
import { logDate } from '../../core/interfaces/log-interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LogService } from '../../core/services/log-service';
import { Router, RouterLink } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
    imports: [
    ReactiveFormsModule,
    RouterLink,
    ButtonModule,
    FloatLabelModule,
    MessageModule,
    ProgressSpinnerModule,
    ToastModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
    errorMessage: string = '';
  type: string = 'password';
  loading = signal<boolean>(false);

  
  constructor(
    private log: LogService,
    private router: Router,
    private messageService: MessageService
  ) {}
  

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.(com)$/),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
    ]),
  });

  submit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.loading.set(true);
      this.log.login(this.loginForm.value as logDate).subscribe({
        next: (res: any) => {

          this.errorMessage = '';
          this.router.navigate(['/home']);
          this.loading.set(false);
          this.messageService.add({
            severity: 'success',
            summary: 'Success Process',
            detail: 'Login completed successfully',
          });
        },
        error: (err) => {
          console.error('Login failed:', err);
          this.errorMessage = err.error.message;
          this.loading.set(false);

          this.messageService.add({
            severity: 'error',
            summary: 'Login Failed',
            detail: this.errorMessage,
          });
        },
      });
    }
  }
}
