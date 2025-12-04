import { Component, HostListener, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/navbar/navbar";
import { Footer } from "./shared/footer/footer";
import { filter, takeUntil } from 'rxjs';
import { Toast } from "primeng/toast";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { UserService } from './core/services/user-service';
import { CommentsService } from './core/services/comments-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Toast],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('social');

  showNav = true;

  constructor(private router: Router, private user:UserService, private comment:CommentsService) {
      this.router.events
    .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((event) => {
      const url = event.urlAfterRedirects;
      this.showNav = !(url.startsWith('/signUp') || url.startsWith('/logIn'));
    });
  }

  @HostListener('window:popstate')
  backBoutton(){
    if(this.user.createForm() || this.user.showUploadForm() || this.comment.showComments()){
      this.user.createForm.set(false)
      this.user.showUploadForm.set(false)
      this.comment.showComments.set(false)
  }if (window.scrollY > 500){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
  
}

