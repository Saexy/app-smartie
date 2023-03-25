import { Injectable } from '@angular/core';
import { User } from './user.model';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  user: User = {
    id: 0,
    name: "",
    email: "",
  };

  constructor() {
    const token = window.localStorage.getItem("token") || "";
    const info = this.getDecodedAccessToken(token);
    this.user = info;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

}
