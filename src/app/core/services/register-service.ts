import { Injectable } from '@angular/core';
import { registerData, registerOutput } from '../interfaces/register-interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
    constructor(private http:HttpClient){

  }

  signUp(data:registerData):Observable<registerOutput> {
    return this.http.post<registerOutput>(`${environment.apiUrl}users/signup`, data)
  }
  
}
