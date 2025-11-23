import { AfterViewInit, AfterViewChecked, Component, ElementRef, NgZone, OnInit, signal, ViewChild, Renderer2, ViewChildren, QueryList, HostListener } from '@angular/core';
import { Post, PostsResponse } from '../../../core/interfaces/posts-interface';
import { PostsServise } from '../../../core/services/posts-servise';
import { Route, Router } from '@angular/router';
import { EditOnPost } from '../../../core/services/edit-on-post';
import { UserService } from '../../../core/services/user-service';
import { ScrollPanelModule } from 'primeng/scrollpanel'
import { Comments } from "../comments/comments";
import { CommentsService } from '../../../core/services/comments-service';
import { SpeedDialModule } from 'primeng/speeddial';
import { MenuItem } from 'primeng/api';
import { SkeletonModule } from 'primeng/skeleton';
import { ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Create } from "../create/create";


@Component({
  selector: 'app-posts',
    imports: [ScrollPanelModule, ProgressSpinnerModule, Comments, SpeedDialModule, SkeletonModule, ReactiveFormsModule, MessageModule, ToastModule, Create],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',

})
export class Posts implements OnInit, AfterViewInit {

  items: MenuItem[] = [];
  isLiked:boolean = false
  post = signal<Post[]>([])
  cachePosts = signal<PostsResponse | null>(null)
  limit = 50
  index = 0
  batch = 10
  page = 1
  loadMore = false
  showComments:boolean = false
  userID = signal<string | undefined>('')
  shareId = signal<string | null>(null)
  shimmer = [...Array(5)]
  showOptions = signal<string | null >(null)
  updateForm = signal<string | null>(null)
  spinner = signal<boolean>(false)
   heart= signal<{ [key: string]: boolean }>({})

  commentsFunc(){
    this.comments.showComments.set(!this.comments.showComments())
  }
  
  private observer!: IntersectionObserver;
  
  @ViewChildren('post') Post!: QueryList<ElementRef>;
  @ViewChild('lastPost') lastElement!: ElementRef;
  
  constructor(private posts: PostsServise,
              private zone:NgZone,
              private render:Renderer2,
              private user:UserService,
              private comments:CommentsService,
              public edit:EditOnPost, 
              private message: MessageService) {}

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
    console.log(this.showOptions());
  }

makeHeart(postId: string) {
  const current = this.heart()[postId] || false;

  this.heart.update((prev) => ({
    ...prev,
    [postId]: !current
  }));
}

  // get post comments
  callComments(id:string){
    this.comments.postID.set(id)
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
    posts.forEach(postEl => {
      const ownerEL = postEl.nativeElement.querySelector('.owner');
      const commentEL = postEl.nativeElement.querySelector('.commentUser');
      const lineEl = postEl.nativeElement.querySelector('.line');

      if(!commentEL){
          this.render.setStyle(lineEl, 'display', 'none');
          return;
      }

      const ownerRect = ownerEL.getBoundingClientRect()      
      const commentRect = commentEL.getBoundingClientRect()

      const distance = Math.abs((commentRect.top - ownerRect.top) + 25)      
      
      this.render.setStyle(lineEl, 'height', `${distance}px`)
      this.render.setStyle(lineEl, 'display', 'block')

    })
  }


  ngAfterViewInit(): void {
  this.observer = new IntersectionObserver(entries => {
    const entry = entries[0];
    if (entry?.isIntersecting) {
      setTimeout(() => {
        this.zone.run(() => this.appendBatch())
      }, 700)
    }
  });


}

  loadPosts() {
  this.posts.getPosts(this.page).subscribe({
    next: res => {
      this.cachePosts.set(res);
      this.index = 0;
      this.post.set([]);
      this.loadMore = false;
      this.appendBatch();
    },
    error: err => console.error(err.message)
  });
}

  appendBatch() {
  const cache = this.cachePosts()?.posts;
  if (!cache) { console.log('appendBatch — no cache'); return; }

  const nextBatch = cache.slice(this.index, this.index + this.batch).filter((res) => {
    return res.body || res.image
  })

  if (nextBatch.length === 0 || this.index + this.batch >= this.limit+10) {
    this.loadMore = false
    this.observer?.disconnect();
    return;
  }

  this.post.update(old => [...old, ...nextBatch]);

  this.index += this.batch;  
  this.loadMore = this.index < this.limit;

        setTimeout(() => {
        if (this.lastElement?.nativeElement) {
          if (this.loadMore && this.lastElement?.nativeElement  && this.post().length > 0) {
            this.observer.observe(this.lastElement.nativeElement);
          }
        } else {
          console.warn('lastElement is not found');
        }
        this.waitForImagesThenMeasure();
      }, 0);

}

// pagination buttons

scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  prevPage(): void {
    if (this.page === 1) return
    this.page--
    this.observer?.disconnect()
    this.loadPosts()
    this.scrollToTop()
  }

  nextPage(): void {
    if (this.page === this.cachePosts()?.paginationInfo.numberOfPages) return
    this.page++
    this.observer?.disconnect()
    this.loadPosts()
    this.scrollToTop()
  }

  // shared func

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

      // if there is an img
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
      // if there is NOoo img
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

//  text form control
textControl = new FormControl('', [Validators.required]);


// update post func
onUpdate() {
  this.spinner.set(true);
  if (this.textControl.invalid) return;

  const formData = new FormData();
  formData.append('body', this.textControl.value ?? '');

  const id = this.updateForm();
  if (!id) return;

  this.posts.updatePost(id, formData).subscribe({
    next: () => {
      const currentPosts = this.post();
      if (!currentPosts) return;

      const updated = currentPosts.map(p =>
        p._id === id
          ? { ...p, body: this.textControl.value ?? p.body }
          : p
      );

      this.post.set(updated);
      this.updateForm.set(null)
      this.spinner.set(false);
              this.message.add({
                severity: 'success',
                summary: 'Success Process',
                detail: 'Your Post Updated Successfully...',
              });
    },
    error: (err) => console.log(err)
  });
}

// delete post func

onDelete(id: string | null) {
  if (!id) return;

  this.posts.deletePost(id).subscribe({
      next: () => {

  const currentPosts = this.post();
  if (currentPosts) {
    const filtered = currentPosts.filter(p => p._id !== id);
    this.post.set(filtered);
  }
                this.message.add({
                severity: 'warn',
                summary: 'Success Process',
                detail: 'Your Post Deleted...',
              });
},error: (err) => console.log(err)
})
}

  ngOnInit(): void {
    this.loadPosts() 
    this.user.getUserInfo().subscribe(
      (res) => {
        this.userID.set(res.id)
      }
    ) 
    
  }
}
