import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.model';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupUser: User;
  employeeForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) { }
  fromlogin =false;
  ngOnInit(): void {
    this.initForm();
    
  }
private initForm(){
let name ='';
let pass = '';
let email = '';
let photourl = '';
if(this.fromlogin){
const signupUser = this.authenticationService.getSignupUser();
name = signupUser.firstname;
email = signupUser.email;
photourl = signupUser.photourl;
}
this.employeeForm = new FormGroup({
  name: new FormControl(name, Validators.required),
  pass: new FormControl(pass, Validators.required),
  email: new FormControl(email, Validators.required),
  photourl: new FormControl(photourl)
  
})

}



  onSubmit(){

    this.authenticationService.addEmployee(this.employeeForm);

  }

}
