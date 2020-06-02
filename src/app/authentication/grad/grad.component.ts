import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../user.model';
import { FormGroup } from '@angular/forms';
import { Employee } from '../employee.model';


@Component({
  selector: 'app-grad',
  templateUrl: './grad.component.html',
  styleUrls: ['./grad.component.css']
})
export class GradComponent implements OnInit {
 
    email = '';
    pass = '';
  //user = new BehaviorSubject<User>(null);
 
 
  ngOnInit() {

    this.authenticationservice.getEmployees();
  }


  constructor(private socialAuthServ: AuthService, private router: Router, private authenticationservice: AuthenticationService) { }

  login(platform: string) {
    this.authenticationservice.login(platform); 
  }
 
  private initform(){
    
  }
 

  onSubmit(){
    this.authenticationservice.log(this.email,this.pass);


  }
}