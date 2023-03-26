import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../shared/context.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public contextService: ContextService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    window.localStorage.setItem("token", "")
    this.router.navigate(["/login"])
  }

}
