import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
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
    id: number;
    signupUser: User;
    employee: Employee[];
    administrator = false;
    admin = new Subject<boolean>();
    constructor(private http: HttpClient, private socialAuthServ: AuthService,
        private router: Router, private dataservice: DataStorageService) { }

    login(platform: string) {
        platform = GoogleLoginProvider.PROVIDER_ID;
        this.socialAuthServ.signIn(platform).then(response => {
            console.log(this.employee[0].id);
            for (let emp of this.employee) {
                if (emp.email === response.email) {
                    console.log("resp")
                    const user = new User(response.email, response.firstName, response.photoUrl, +emp.id); this.signupUser = user;
                    this.user.next(user);
                    localStorage.setItem('userdata', JSON.stringify(user));
                    if (emp.role === "admin") {
                        this.administrator = true;
                        this.admin.next(this.administrator);
                    }
                    this.router.navigate(['/home']);
                    break;
                }
                else {
                    this.router.navigate(['/signup']);
                }
            }
        });
    }

    log(email: string, pass: string) {
        let bool = false;
        for (let emp of this.employee) {
            if (email === emp.email && pass === emp.pass) {
                const user = new User(emp.email, emp.name, emp.photourl, +emp.id);
                this.signupUser = user;
                this.user.next(user);
                bool = true;
                localStorage.setItem('userdata', JSON.stringify(user));
                if (emp.role === "admin") {
                    this.administrator = true;
                    this.admin.next(this.administrator);
                }
                this.router.navigate(['/home']);
                break;
            }
        }
        if (bool === false){
            alert('Enter Valid Credentials');
        }
    }

    getSignupUser() {
        return this.signupUser;
    }

    autoLogin() {
        const userData: {
            id: number;
            email: string;
            firstname: string;
            photourl: string;
        } = JSON.parse(localStorage.getItem('userdata'));
        if (!userData) {
            return;
        }
        this.user.next(userData);
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/']);
        localStorage.removeItem('userdata');
    }


    addEmployee(emp: any) {
        console.log(emp);
        const employee = new Employee(emp.value.name, emp.value.pass, emp.value.email, emp.value.photourl);
        this.dataservice.addEmployee(employee).subscribe(()=>{
            this.router.navigate(['/']);
        },()=>{this.router.navigate(['/']);});
    }


    getEmployees() {
        this.dataservice.getEmployees().subscribe((employee) => {
            this.employee = employee;
            //this.id = employee.id;
        });


    }




}