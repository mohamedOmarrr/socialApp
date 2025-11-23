import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal, Signal } from '@angular/core';
import { createPostOutput, createPostsData, Post, PostDetails, PostsResponse } from '../interfaces/posts-interface';
import { LogService } from './log-service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostsServise {

  constructor(private http:HttpClient, private log:LogService){}

  header(){
    const token = this.log.getToken()
    const headers: HttpHeaders = new HttpHeaders(
        token ? { token } : {}
    )  
    return headers
  }

  createPost(data: FormData):Observable<createPostOutput> {
    const headers = this.header()

  return this.http.post<createPostOutput>(
    'https://linked-posts.routemisr.com/posts',
    data,
    { headers }
  );
} 


getPosts(page: number):Observable<PostsResponse>{
    const headers = this.header()

    return this.http.get<PostsResponse>(`${environment.apiUrl}posts?limit=50&page=${page}&sort=-createdAt`,
      {headers}
    )
}


postDetails(id: string):Observable<PostDetails>{
    const headers = this.header()

    return this.http.get<PostDetails>(`${environment.apiUrl}posts/${id}`,
      {headers}
    )
}

updatePost(id:string, form:FormData):Observable<any>{
    const headers = this.header()

    return this.http.put<any>(`${environment.apiUrl}posts/${id}`,
      form,
      { headers }
    )
}

deletePost(id:string):Observable<any>{
  const headers = this.header()  

  return this.http.delete<any>(`${environment.apiUrl}posts/${id}`, 
    { headers }
  )
}
}

