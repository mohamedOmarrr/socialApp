import { Component, HostListener, OnInit, signal } from '@angular/core';
import { UserService } from '../../core/services/user-service';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-profile-img',
  imports: [ReactiveFormsModule, ToastModule, MessageModule, ProgressSpinnerModule],
  templateUrl: './profile-img.html',
  styleUrl: './profile-img.scss'
})
export class ProfileImg {

  constructor(public user:UserService, private message:MessageService){}


 profilePicture = new FormControl<File | null>(null, Validators.required);
 selectedFileName = ''
 spinner = signal<boolean>(false)

  @HostListener('document:click', ['$event'])
  clickListener(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if(this.user.showUploadForm() === true) {
      
          if (!target.closest('.picForm') && !target.closest('.cameraBtn')) {
            this.user.showUploadForm.set(false);
          }

    }
  }


  onFileSelected(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.profilePicture.setValue(file);
      this.selectedFileName = file.name;
    }
  }

  uploadProfilePicture() {
if (this.profilePicture.invalid) return;
    this.spinner.set(true)

    const file = this.profilePicture.value;
    const formData = new FormData();
    formData.append('photo', file!);

    this.user.uploadPersonalPhoto(formData).subscribe({
      next: (res) => {
        this.spinner.set(false)
        this.user.getUserInfo().subscribe(
          (res) => this.user.userImg.set(res.image)
        )

        console.log(res);
         this.message.add({
            severity: 'success',
            summary: 'Success Process',
            detail: 'Your Profile Ptcture updated successfully',
          });
        
        this.user.showUploadForm.set(false);
      },
      error: (err) => console.log(err)
      

    })
  }

}
