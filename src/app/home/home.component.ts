import { Component, OnInit, OnDestroy } from '@angular/core';
import { Socialusers } from '../authentication/socialusers.model'
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication/auth.service';
import { User } from '../authentication/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  user: User;
  sub: Subscription
  constructor(private toastr: ToastrService, private authservice: AuthenticationService){}
  
  
  ngOnDestroy() {
   this.sub.unsubscribe();
  }
  
  ngOnInit() {
    this.sub = this.authservice.user.subscribe((user)=>
    {
this.user = user;
//this.show();
    });
  }

  
  

}
