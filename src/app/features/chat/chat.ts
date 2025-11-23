import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.html',
  styleUrl: './chat.scss'
})
export class Chat {
  chatList:{ name: string; img: string }[] = [
    {
      name:'Mazen',
      img:'./images/user1.jpg'
    },
    {
      name:'Zien',
      img:'./images/user2.jpg'
    },
    {
      name:'jamila',
      img:'./images/user3.jpg'
    },
    {
      name:'Rose',
      img:'./images/user4.jpg'
    },

  ]

}
