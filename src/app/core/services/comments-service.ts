import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { LogService } from './log-service';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { comments, createCommentResponse, deleteComment } from '../interfaces/comments-interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

    postID = signal<string>('')
    showComments = signal<boolean>(false)

  constructor(private http:HttpClient, private log:LogService){}

  header(){
      const token = this.log.getToken()
      const headers: HttpHeaders = new HttpHeaders(
         token ? { token } : {}
      )  
      return headers
  }
  createComment(data: object):Observable<createCommentResponse> {
    const headers =  this.header()
    return this.http.post<createCommentResponse>(
      `${environment.apiUrl}comments`,
      data,
      { headers }
    );
  } 


  getComments(id:string):Observable<comments[]>{
    const headers = this.header()

    return this.http.get<createCommentResponse>(
      `${environment.apiUrl}posts/${id}/comments`
      , { headers }
    ).pipe(
      map(res => res.comments)
    )
  }

  deleteComment(id:string):Observable<deleteComment>{
      const headers = this.header()

      return this.http.delete<deleteComment>(`${environment.apiUrl}comments/${id}`, 
        { headers }
      )
  }
  
}
