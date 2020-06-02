import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GradComponent } from '../authentication/grad/grad.component';
import { AuthenticationService } from '../authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  isAuthenticated = false;
  private usersub: Subscription;
  //public loggedInStatus = JSON.parse(localStorage.getItem('userdata') || 'false');
  constructor(private router: Router, private authenticationservice: AuthenticationService) { }
  ngOnDestroy(): void {
    this.usersub.unsubscribe();
  }

  ngOnInit(): void {
    this.usersub = this.authenticationservice.user.subscribe(user => {
      this.isAuthenticated = !!user;
    })


  }
  signout() {
  this.authenticationservice.logout();  
  }

  
}
