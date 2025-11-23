import { Component, computed, effect, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user-service';
import { PostsServise } from '../../../core/services/posts-servise';
import { CommentsService } from '../../../core/services/comments-service';
import { comments } from '../../../core/interfaces/comments-interface';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SkeletonModule } from 'primeng/skeleton';
import { EditOnPost } from '../../../core/services/edit-on-post';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-comments',
  imports: [ScrollPanelModule, ReactiveFormsModule, SkeletonModule, ToastModule, MessageModule],
  templateUrl: './comments.html',
  styleUrl: './comments.scss'
})
export class Comments implements OnInit {

  visiableComments = computed(() => this.comments.showComments())
  shimmer = [...Array(11)]
  loading = signal<boolean>(false)
  noComments = signal<boolean>(false)
  
  allCommets = signal<comments[]>([]) 
  content = new FormControl('')
  postId = computed(() => this.comments.postID())
  userID = signal<string | undefined>('')
  creatorID = signal<string>('')
  showOptions = signal<string | null>(null)

  constructor(private user:UserService,
    private posts:PostsServise,
    private comments:CommentsService,
    public edit:EditOnPost,
    private mesage: MessageService){
    
    effect(() => {
      if(this.visiableComments() ){
        this.loading.set(true)
        this.callComments()
      }
      this.posts.postDetails(this.postId()).subscribe(
      (res) => {
        this.creatorID.set(res.post.user._id)        
      }
    )
    })
  }

  options(id:string){
    this.showOptions.set(
      this.showOptions() === id ? null : id
    )
  }

  ngOnInit(): void {
    this.user.getUserInfo().subscribe(
      (res) => {
        this.userID.set(res.id)
        console.log(this.userID());
        
      }
    ) 

    

  }


  commentsFunc(){
    this.comments.showComments.set(!this.comments.showComments())
  }





   // get post comments
  callComments(){    
    this.loading.set(true)
    if(this.postId()){     
      this.noComments.set(false) 
      this.allCommets.set([])
      this.comments.getComments(this.postId()).subscribe({
        next: (res) => {
          this.allCommets.set(res)
          this.loading.set(false)
          if(res.length  === 0){
            this.noComments.set(true)
          }
        },
        error: (err) => {
          console.log(err);
          
        }
      })
    }
  }

  // create comment
  createComment(){
    if (!this.content.value) return


    const body = {
      content: this.content.value,
      post: this.postId()
    };
    
    this.comments.createComment(body).subscribe({
      next: () => {
        this.callComments()
        this.content.reset()
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

  onDelete(id:string | null){
    if(!id) return
    console.log(id);
    
    this.comments.deleteComment(id).subscribe({
      next: () => {
        this.allCommets.update(current => {
          if (!current) return current;

          return current.filter(c => c._id !== id);
        });
      },
      error: (err) => console.log(err)
    })
  }


}
