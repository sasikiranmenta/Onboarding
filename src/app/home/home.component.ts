import { Component, OnInit } from '@angular/core';
import { Socialusers } from '../authentication/socialusers.model'
import { AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  socialusers = new Socialusers();
  constructor(public OAuth: AuthService, private router: Router) { }
  ngOnInit() {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
  }
  logout() {
    alert(1);
    this.OAuth.signOut().then(data => {
      debugger;
      this.router.navigate(['trends']);
    });
  }

}
