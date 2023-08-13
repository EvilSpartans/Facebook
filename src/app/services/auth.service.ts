import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseRequest } from '../models/response-request';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = new BehaviorSubject<boolean>(false)

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    const token = localStorageService.getItem('token')
    const userId = localStorageService.getItem('userId')
    if (token && userId) {
      this.verifyToken(token, userId)
    }
  }

  verifyToken(token: any, userId: any) {
    const data = { token, userId }
    this.http.post<ResponseRequest>(environment.apiUrl + "user/verify/token", data).subscribe({
      next: (result: ResponseRequest) => {
        this.emitAuth(result.isSuccess, data)
      }
    })
  }
  
  emitAuth(isSuccess: boolean, data: { token: any; userId: any; }) {
    this.isAuth.next(isSuccess)
    if (isSuccess) {
      this.localStorageService.setItem("token", data.token)
      this.localStorageService.setItem("userId", data.userId)
    } else {
      this.localStorageService.removeItem("token")
      this.localStorageService.removeItem("userId")
    }
  }

  signin(user: User): Observable<ResponseRequest> {
    return this.http.post<ResponseRequest>(environment.apiUrl + "user/signin", user)
  }

  signup(user: User): Observable<ResponseRequest> {
    return this.http.post<ResponseRequest>(environment.apiUrl + "user/signup", user)
  }

  logout() {
    this.localStorageService.removeItem("token")
    this.localStorageService.removeItem("userId")
  }

}
