import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../user.model';


@Component({
  selector: 'app-grad',
  templateUrl: './grad.component.html',
  styleUrls: ['./grad.component.css']
})
export class GradComponent implements OnInit {
 
  //user = new BehaviorSubject<User>(null);
 
 
  ngOnInit() {
  }


  constructor(private socialAuthServ: AuthService, private router: Router, private authenticationservice: AuthenticationService) { }

  login(platform: string) {
    this.authenticationservice.login(platform);
    // platform = GoogleLoginProvider.PROVIDER_ID;
    // this.socialAuthServ.signIn(platform).then(response => {
    //   const user = new User(response.email, response.firstName, response.photoUrl);
    //   this.user.next(user);
    //   console.log(user);
    //   localStorage.setItem('userdata', JSON.stringify(user));
    //   this.router.navigate(['home']);

  
  }
}