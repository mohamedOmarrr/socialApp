import { AfterViewInit, Component, ElementRef, NgZone, OnInit, QueryList, Renderer2, signal, ViewChild, ViewChildren } from '@angular/core';
import { Create } from "../../shared/components/create/create";
import { Posts } from "../../shared/components/posts/posts";
import { flatMap } from 'rxjs';
import { Profile } from "../profile/profile";
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user-service';
import { ScrollPanelModule } from 'primeng/scrollpanel'
import { Post, PostsResponse } from '../../core/interfaces/posts-interface';
import { PostsServise } from '../../core/services/posts-servise';
import { Chat } from "../chat/chat";

@Component({
  selector: 'app-home',
  imports: [Create, Posts, ScrollPanelModule, Chat],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {

  showOptions = signal<boolean>(false)
  userImg = signal<string | null>(null)
  name = signal<string | null>(null)
    
  options(){
    this.showOptions.set(!this.showOptions())
  }

  
  
  constructor(private posts: PostsServise,
              private zone:NgZone,
              private render:Renderer2,
              private router:Router,
              private user:UserService) {}

 

  goProfile(){
        this.router.navigate(['/profile'])
  }

  ngOnInit(): void {
    this.user.getUserInfo().subscribe(
      (res) => {
        this.userImg.set(res.image)
        const fName = res.username.split(' ') 
        this.name.set(fName[0])
      }
    )
  }






}
