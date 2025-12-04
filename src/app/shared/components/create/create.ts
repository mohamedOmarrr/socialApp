import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { AbstractControl, ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { ProgressBarModule } from 'primeng/progressbar';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PostsServise } from '../../../core/services/posts-servise';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessageModule } from 'primeng/message';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-create',
  imports: [ButtonModule,
    InputTextModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    ToastModule,
    BadgeModule,
    FloatLabelModule,
    ProgressBarModule, 
    MessageModule, 
  ProgressSpinnerModule],
  templateUrl: './create.html',
  styleUrl: './create.scss'
})
export class Create {

  createForm: FormGroup;
  spinner = signal<boolean>(false)
   
  @ViewChild('formRef') form!: ElementRef;

 constructor(private fb: FormBuilder,public user:UserService, private post:PostsServise, private message: MessageService) {
  this.createForm = this.fb.group({
    body: [null],
    image: ['']
  }, { validators: this.atLeastOne() })
}

atLeastOne(): ValidatorFn {
  return (form: AbstractControl): ValidationErrors | null => {
    const body = form.get('body')?.value?.trim();
    const image = form.get('image')?.value;

    if (!body && !image) {
      return { atLeastOne: true };
    }
    return null;
  }
}


  callForm(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (this.form?.nativeElement.contains(target)) return;
    this.user.createForm.set(false)
  }




  selectedFiles: any[] = [];

  onSelectedFiles(event: any) {
    const file = event.currentFiles[0]
    if (file) {
      this.selectedFiles = [{
        name: file.name,
        size: file.size,
        type: file.type,
        objectURL: URL.createObjectURL(file),
        file: file
      }];
      this.createForm.patchValue({ image: file });
    }
  }

  removeFile(index: number) {
    URL.revokeObjectURL(this.selectedFiles[index].objectURL); 
    this.selectedFiles.splice(index, 1);
  }

  formatSize(bytes: number): string {
  if (!bytes) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  choose(event: any, chooseCallback: any) {
    chooseCallback(); 
  }

  clearFiles() {
  this.selectedFiles.forEach(file => {
    if (file.objectURL) {
      URL.revokeObjectURL(file.objectURL);
    }
  });
  this.selectedFiles = [];
  this.createForm.patchValue({ image: null });
}

  submit() {
    this.spinner.set(true)    
    if (this.createForm.invalid) {
      this.spinner.set(false)
      this.message.add({
            severity: 'error',
            summary: 'failed Process',
            detail: 'Your can not Create an empity post',
          });
          return

    }

    const formData = new FormData();
    formData.append('body', this.createForm.get('body')?.value);

    const file: File = this.createForm.get('image')?.value;
    if (file) {
      formData.append('image', file, file.name);
    }

    this.post.createPost(formData).subscribe({
      next: (res) => {
        this.clearFiles();
        this.createForm.patchValue({ name: '' }); 
        this.user.createForm.set(false)
        this.spinner.set(false)
                        this.message.add({
                  severity: 'success',
                  summary: 'Success Process',
                  detail: 'Your Post Created Successfully...',
                });
      },
      error: () => {
                  this.message.add({
                  severity: 'error',
                  summary: 'Failed Process',
                  detail: 'img size must be less than 4mb',
                });
                this.spinner.set(false)
      }
    });
  }
}