import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { LogService } from './log-service';
import { map, Observable } from 'rxjs';
import { getInfo, inUser, User } from '../interfaces/user-interface';
import { PostsResponse } from '../interfaces/posts-interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userImg = signal<string>('')
  showUploadForm = signal<boolean>(false)
  createForm = signal<boolean>(false)

  constructor(private http:HttpClient, private log:LogService){}

  uploadPersonalPhoto(data:FormData):Observable<any>{
    const token = this.log.getToken();
    const headers: HttpHeaders = new HttpHeaders(
      token ? { token } : {}
    )  

    return this.http.put(`https://linked-posts.routemisr.com/users/upload-photo`,
      data,
    {headers})
  }

getUserInfo(): Observable<User> {
  const token = this.log.getToken();
  const headers: HttpHeaders = new HttpHeaders(
    token ? { token } : {}
  );

  return this.http.get<getInfo>(
    `https://linked-posts.routemisr.com/users/profile-data`,
    { headers }
  ).pipe(
    map(res => ({
      id: res.user._id,
      username: res.user.name,
      mail: res.user.email,
      date: res.user.dateOfBirth,
      gender: res.user.gender,
      image: res.user.photo,
      startIn: res.user.createdAt
    }))
  );
}

getPersonalPosts(id:string | undefined):Observable<PostsResponse> {
    const token = this.log.getToken();
      const headers: HttpHeaders = new HttpHeaders(
        token ? { token } : {}
      )
  
      return this.http.get<PostsResponse>(`${environment.apiUrl}users/${id}/posts`,
        {headers}
      ).pipe(
         map((res) => {
        return {
          ...res,
          posts: [...(res.posts ?? [])].reverse() 
        };
      })
      )
}

}

