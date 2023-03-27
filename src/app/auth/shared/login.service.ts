import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';
import { UserLogin } from './user-login.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(userLogin: UserLogin): Observable<Login> {
    return this.httpClient.post<Login>(`${environment.api_url}/login`, userLogin);
  }

}
