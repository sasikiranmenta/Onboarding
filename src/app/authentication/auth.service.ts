import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Employee } from './employee.model';
import { DataStorageService } from '../shared/datastorage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    user = new BehaviorSubject<User>(null);
    signupUser: User;

    constructor(private http: HttpClient, private socialAuthServ: AuthService,
                private router: Router, private dataservice: DataStorageService) { }

    login(platform: string) {
        platform = GoogleLoginProvider.PROVIDER_ID;
        this.socialAuthServ.signIn(platform).then(response => {
            const user = new User(response.email, response.firstName, response.photoUrl);
            this.signupUser = user;
            this.user.next(user);
            localStorage.setItem('userdata', JSON.stringify(user));
            this.router.navigate(['/signup']);
        });
    }

    getSignupUser() {
        return this.signupUser;
    }

    autoLogin() {
        const userData: {
            email: string;
            firstname: string;
            photourl: string;
        } = JSON.parse(localStorage.getItem('userdata'));
        if (!userData) {
            return;
        }
        const loadedUser = new User(userData.email, userData.firstname, userData.photourl);
        this.user.next(loadedUser);
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/']);
        localStorage.removeItem('userdata');
    }


    addEmployee(emp: any) {
        console.log(emp);
        const employee = new Employee(emp.value.name, emp.value.pass, emp.value.email, emp.value.photourl);
        this.dataservice.addEmployee(employee).subscribe();
    }




}