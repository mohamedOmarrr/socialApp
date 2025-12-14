import { Component, NgZone, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RegisterService } from '../../core/services/register-service';
import { registerData } from '../../core/interfaces/register-interface';
import { UserService } from '../../core/services/user-service';
import { LogService } from '../../core/services/log-service';
import { logDate } from '../../core/interfaces/log-interface';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, ButtonModule, RouterLink, FloatLabelModule, MessageModule, ProgressSpinnerModule, ToastModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  subForm!: FormGroup;
  errorMessage:string = '' 
  type:string = 'password'
  loading = signal<boolean>(false);

  constructor(private register:RegisterService,
    private router:Router,
    private messageService: MessageService,
    private fb:FormBuilder,
    private log:LogService,
    private user:UserService,
  private zone:NgZone){

    this.subForm = this.fb.group({
    email: [null],
    password: [null]
   })

    const nav = this.router.getCurrentNavigation()
    const data = nav?.extras?.state as {toast?: any; source:string} | undefined

    if (!data) return;

    if (data.source === 'cart' && data.toast) {
      this.messageService.add(data.toast);
    }

    
    else if (data.source === 'guard' && data.toast) {
      this.messageService.add(data.toast);
    }
  }

 signForm = new FormGroup(
  {
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    ]),
    dateOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  },
  { validators: this.confirmPassword }
);

  confirmPassword(group:AbstractControl){
    return group.get('password')?.value === group.get('rePassword')?.value ? null : { mismatch: true }
  }



  submit() {
  this.signForm.markAllAsTouched();

  if (this.signForm.valid) {
    this.loading.set(true)
    
    this.register.signUp(this.signForm.value as registerData).subscribe({
    next: () => {
        this.subForm  = this.fb.group({
          email: this.signForm.get('email'),
          password: this.signForm.get('password')
        })
            if (this.subForm.valid) {
              this.log.login(this.subForm.value as logDate).subscribe({
                next: () => {                  
                },
                error: (err) => {
                  console.log(err);
                  
                },
              });
            }
            this.router.navigate(['/home']);
            this.loading.set(false);
            this.messageService.add({
          severity: 'success',
          summary: 'Success Process',
          detail: 'Register completed successfully, Start login',
        });

    },
    error:  (err) => {
          console.error('Login failed:', err);
          this.errorMessage = err.error.message;
          this.loading.set(false);

          this.messageService.add({
            severity: 'error',
            summary: 'Register Failed',
            detail: this.errorMessage,
          });
        },
  });
}
}
}
