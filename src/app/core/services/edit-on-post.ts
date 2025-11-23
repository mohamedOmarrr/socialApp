import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { LogService } from './log-service';
import { UserService } from './user-service';
import { PostsServise } from './posts-servise';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditOnPost {
  // userId!:string | undefined

  constructor(private http:HttpClient){}

  // edit on time

  getTimeAgo(dateString: string): string {
  const now = new Date();
  const postDate = new Date(dateString);
  const diffMs = now.getTime() - postDate.getTime();

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return 'just now';
  if (diffHours < 24) return `${diffHours}h`;
  if (diffDays < 7) return `${diffDays}d`;

  
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks}w`;
  }


  const months = (now.getFullYear() - postDate.getFullYear()) * 12 + (now.getMonth() - postDate.getMonth());
  if (months < 12) return `${months}m`;

 
  const years = now.getFullYear() - postDate.getFullYear();
  return `${years}y`;
}


  
}
