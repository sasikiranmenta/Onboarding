import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';
import { formatDate } from '@angular/common';
import { LogService } from 'src/app/shared/log.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-grad',
  templateUrl: './grad.component.html',
  styleUrls: ['./grad.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class GradComponent implements OnInit {
  
  currentdate = new Date();
  date = formatDate(this.currentdate, 'yyyy-MM-dd', 'en');
 
    email = '';
    pass = '';
  //user = new BehaviorSubject<User>(null);
 
  ngOnInit() {

    this.authenticationservice.getEmployees();
  }


  constructor(private socialAuthServ: AuthService,
     private router: Router,
      private authenticationservice: AuthenticationService,
      private logService: LogService,private toastr: ToastrService) { }

  login(platform: string) {
    this.authenticationservice.login(platform); 
  }
show(){
  //this.toastr.success('Logged Out','',{timeOut:3000});
}


  onSubmit(){
    this.authenticationservice.log(this.email,this.pass);
  }
}