import { Component, signal } from '@angular/core';
import { UserService } from '../../core/services/user-service';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-img',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-img.html',
  styleUrl: './profile-img.scss'
})
export class ProfileImg {

  constructor(public user:UserService){}


 profilePicture = new FormControl<File | null>(null, Validators.required);
  selectedFileName = '';

  onFileSelected(event: any) {
    const file = event.target.files?.[0];
    if (file) {
      this.profilePicture.setValue(file);
      this.selectedFileName = file.name;
    }
  }

  uploadProfilePicture() {
if (this.profilePicture.invalid) return;

    const file = this.profilePicture.value;
    const formData = new FormData();
    formData.append('photo', file!);

    this.user.uploadPersonalPhoto(formData).subscribe({
      next: (res) => {

        console.log(res);
        
        this.user.showUploadForm.set(false);
      },
      error: (err) => console.log(err)
      

    })
  }

}
