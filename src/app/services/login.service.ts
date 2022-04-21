import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  login(email: any, password: any) {
    return this.httpClient.post<Observable<any>>(`http://127.0.0.1:3000/api_auth/auth/login`, {email, password}).pipe(map(res => res)); // check it out later
  }
  constructor(
    private httpClient: HttpClient
  ) { }
}
