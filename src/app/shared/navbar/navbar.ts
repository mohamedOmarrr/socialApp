import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, ToastModule, MessageModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  constructor(private message:MessageService){}

  opps(){
    this.message.add({
              severity: 'warn',
              summary: 'Opps',
              detail: "this page 'll completed soon...",
            });
  }

}
