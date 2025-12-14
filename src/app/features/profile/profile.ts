import { Component, computed, ElementRef, HostListener, NgZone, OnInit, QueryList, Renderer2, signal, ViewChildren } from '@angular/core';
import { UserService } from '../../core/services/user-service';
import { PostsResponse } from '../../core/interfaces/posts-interface';
import { PostsServise } from '../../core/services/posts-servise';
import { CommentsService } from '../../core/services/comments-service';
import { ReactiveFormsModule, Validators, FormControl } from '@angular/forms';

import { Comments } from "../../shared/components/comments/comments";
import { Create } from "../../shared/components/create/create";
import { ProfileImg } from "../profile-img/profile-img";
import { SkeletonModule } from 'primeng/skeleton';
import { EditOnPost } from '../../core/services/edit-on-post';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Chat } from "../chat/chat";


@Component({
  selector: 'app-profile',
  imports: [Comments, Create,
    ProfileImg, SkeletonModule,
    ReactiveFormsModule, ReactiveFormsModule,
    ToastModule, MessageModule,
    ProgressSpinnerModule, Chat],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {

  showOptions = signal<string | null >(null)
  userID = signal<string | undefined>(undefined)
  userPosts = signal<PostsResponse | null>(null)
  page = 1
  postID = signal<string>('')
  shimmer = [...Array(5)]
  showShimmer = signal<boolean>(true)
  updateForm = signal<string | null>(null)
  shareId = signal<string | null>(null)
  spinner = signal<boolean>(false)
  heart= signal<{ [key: string]: boolean }>({})
  name = signal<string | null>(null)
 

  @ViewChildren('post') Post!: QueryList<ElementRef>;

  constructor(public user:UserService,
    private render:Renderer2,
    private zone:NgZone,
    private posts:PostsServise,
    private comments:CommentsService,
    public edit:EditOnPost, 
    private message: MessageService){}


  readyToShare(id:string){
    this.shareId.set(id)
  }

  openUpdateForm(post:any){
    this.updateForm.set(post._id)
    this.textControl.setValue(post.body)
  }

  @HostListener('document:click', ['$event'])
  clickListener(event: MouseEvent) {
    const target = event.target as HTMLElement;


    if (!target.closest('.options-wrapper')&& this.showOptions() && !target.closest('.plus-icon')) {
      this.showOptions.set(null);
    }else if(!target.closest('popUp-share')){
      this.shareId.set(null)
    }
  }

  options(id:string){
    this.showOptions.set(
    this.showOptions() === id ? null : id
    )
  }

  commentsFunc(){
    this.comments.showComments.set(!this.comments.showComments())
  }

makeHeart(postId: string) {
  const current = this.heart()[postId] || false;

  this.heart.update((prev) => ({
    ...prev,
    [postId]: !current
  }));
}

  ngOnInit(): void {
    this.user.getUserInfo().subscribe(
      (res) => {
        this.userID.set(res.id)
        this.name.set(res.username)
        this.profilePosts()
      }
    )
  }




  profilePosts(){
    if(this.userID()){
      this.user.getPersonalPosts(this.userID()).subscribe({
        next: res => {
          this.showShimmer.set(false)
          this.userPosts.set(res)
          
          console.log(this.userPosts()?.posts.length === 0, this.showShimmer());
          this.user.userImg.set(res.posts[0].user.photo)
          setTimeout(() => {
            this.waitForImagesThenMeasure()
          }, 0);
        },
        error: res => console.error(res.message)
      })
    }
  }





sharePost(id: string | null) {
  if (!id) return;

  this.spinner.set(true);

  this.posts.postDetails(id).subscribe({
    next: (res) => {
      const details = res.post;
      const formData = new FormData();

      const sharedBody = `${details.body || ''}<br /><span
        class="font-normal text-teal-600 text-[14px]"
      >@shared from ${details.user?.name || 'Unknown'}</span>`;

      formData.append('body', sharedBody);

      // there is image
      if (details.image) {

        fetch(details.image)
          .then(response => response.blob())
          .then(blob => {

            const file = new File([blob], 'shared.jpg', { type: blob.type });
            formData.append('image', file);

            this.posts.createPost(formData).subscribe({
              next: () => {
                this.spinner.set(false);
                this.message.add({
                  severity: 'success',
                  summary: 'Success Process',
                  detail: 'Your Post shared Successfully...',
                });
                this.shareId.set(null);
              },
              error: (err) => {
                this.spinner.set(false);
                console.error(err);
              }
            });
          });

      } 
    //  there isn't image
      else {

        this.posts.createPost(formData).subscribe({
          next: () => {
            this.spinner.set(false);
            this.message.add({
              severity: 'success',
              summary: 'Success Process',
              detail: 'Your Post shared Successfully...',
            });
            this.shareId.set(null);
          },
          error: (err) => {
            this.spinner.set(false);
            console.error(err);
          }
        });

      }

    },
    error: (err) => {
      this.spinner.set(false);
      console.error(err);
    }
  });
}

   // get the heigth of the line between ownerImg and commenterImg
  private waitForImagesThenMeasure() {
    this.zone.runOutsideAngular(() => {
      const checkImages = () => {
        const images = Array.from(document.querySelectorAll('img')) as HTMLImageElement[];
        if (images.length === 0) return;

        let loadedCount = 0;
        const tryMeasure = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            this.zone.run(() => this.whatDistance());            
          }
        };

        images.forEach(img => {
          if (img.complete) {
            tryMeasure();
          } else {
            img.addEventListener('load', tryMeasure);
            img.addEventListener('error', tryMeasure);
          }
        });
      };

      // wait a bit for render
      setTimeout(checkImages, 0);
    });
  }
  whatDistance(){
    const posts = this.Post.toArray()
    console.log(posts);
    
    posts.forEach(postEl => {
      const ownerEL = postEl.nativeElement.querySelector('.owner');
      const commentEL = postEl.nativeElement.querySelector('.commentUser');
      const lineEl = postEl.nativeElement.querySelector('.line');

      if(!commentEL){
          this.render.setStyle(lineEl, 'display', 'none');
          return;
      }

      const ownerRect = ownerEL.getBoundingClientRect()      
      console.log(ownerRect);
      
      const commentRect = commentEL.getBoundingClientRect()
      console.log(commentRect);
      

      const distance = Math.abs((commentRect.top - ownerRect.top) + 25)      
      
      this.render.setStyle(lineEl, 'height', `${distance}px`)
      this.render.setStyle(lineEl, 'display', 'block')

    })
  }

  // get post comments
  callComments(id:string){
    this.comments.postID.set(id)
  }

  textControl = new FormControl('', [Validators.required]);

    onUpdate(){
      this.spinner.set(true);
      if(this.textControl.invalid) return
  
      const formData = new FormData()
      formData.append('body', this.textControl.value ?? '')
      const id = this.updateForm()
      console.log(id);
      
      if(!id) return
        this.posts.updatePost(id, formData).subscribe({
           next: (updatedPost) => {
const current = this.userPosts();
if (!current) return;

const posts = current.posts ?? [];
const index = posts.findIndex(p => p._id === id);
if (index > -1) {
  const newPosts = [...posts];
  newPosts[index] = {
    ...newPosts[index],
    body: this.textControl.value ?? newPosts[index].body
  };

  this.userPosts.set({
    ...current,
    posts: newPosts,
    paginationInfo: current.paginationInfo
  });
}

    this.textControl.reset();
    this.updateForm.set(null);
    this.spinner.set(false);
                this.message.add({
                  severity: 'success',
                  summary: 'Success Process',
                  detail: 'Your Post Updated Successfully...',
                });
    
  },
  error: (err) => console.error(err)
    })
 
      

  }

    onDelete(id:string | null){
    if(!id) return
    this.posts.deletePost(id).subscribe({
      next: () => {
         this.userPosts.update(current => {
        if (!current) return current;
        return {
          ...current,
          posts: current.posts.filter(p => p._id !== id)
        };
      });
                this.message.add({
                severity: 'warn',
                summary: 'Success Process',
                detail: 'Your Post Deleted...',
              });
      },
      error: (err) => console.log(err)
    }
      
    )
  }

}
