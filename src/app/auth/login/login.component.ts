import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { UserLogin } from '../shared/user-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = "";
  user: UserLogin = {
    email: "",
    password: "",
  }

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.loginService.login(this.user).toPromise().then((response) => {
      const token = response?.token || "";
      window.localStorage.setItem("token", token);
      this.router.navigate(["/dashboard"])
    }).catch((e) => {
      this.error = e.error.msg;
    })
  }

}
