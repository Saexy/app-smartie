import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/shared/context.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public contextService: ContextService) { }

  ngOnInit(): void {
    
  }

}
