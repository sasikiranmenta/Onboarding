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
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private usersub: Subscription;
  private adminsub: Subscription;
  admin = false;   // public loggedInStatus = JSON.parse(localStorage.getItem('userdata') || 'false');
  constructor(private router: Router, private authenticationservice: AuthenticationService,private grad: GradComponent) { }
  ngOnDestroy(): void {
    this.usersub.unsubscribe();
    this.adminsub.unsubscribe();
  }

  ngOnInit(): void {
    this.usersub = this.authenticationservice.user.subscribe(user => {
      this.isAuthenticated = !!user;
      this.adminsub = this.authenticationservice.admin.subscribe(admin =>{
        this.admin = admin;
      });

    })


  }
  signout() {
    this.authenticationservice.logout();
    this.grad.show();
  }


}
