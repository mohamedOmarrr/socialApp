import { Component } from '@angular/core';
import { Route, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { CommentsService } from '../../core/services/comments-service';
import { LogService } from '../../core/services/log-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ToastModule, MessageModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  constructor(private message:MessageService, public comment:CommentsService, private log:LogService, private router:Router){}

  opps(){
    this.message.add({
              severity: 'warn',
              summary: 'Opps',
              detail: "this page 'll completed soon...",
            });
  }

    logout() {
    this.log.logOut()

    this.router.navigateByUrl('/signUp', { replaceUrl: true });
  }

}
