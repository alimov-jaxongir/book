import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {
  }

  loginUser(loginForm: any) :Observable<ResponseModel>{
    const { username, password } = loginForm.value
    return this.http.post<ResponseModel>('https://dummyjson.com/auth/login', { username, password })
  }
}
export interface ResponseModel {
  firstName: string,
  lastName: string,
  id: number,
  gender: string
  status:string,
  username:string,
  image:string ,
   token: string;
  message:string
}
