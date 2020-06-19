import { BehaviorSubject, Subject } from 'rxjs';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Employee } from './employee.model';
import { DataStorageService } from '../shared/datastorage.service';
import { ToastrService } from 'ngx-toastr';

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
        private router: Router, private dataservice: DataStorageService,
        private toastr: ToastrService) { }

    login(platform: string) {
        platform = GoogleLoginProvider.PROVIDER_ID;
        this.socialAuthServ.signIn(platform).then(response => {
            console.log(response);
            for (let emp of this.employee) {
                if (emp.email === response.email) {
                    const user = new User(response.email, response.firstName, response.photoUrl, +emp.id); this.signupUser = user;
                    this.senduser(user);
                    localStorage.setItem('userdata', JSON.stringify(user));
                    if (emp.role === "admin") {
                        this.administrator = true;
                        this.sendAdmin(this.administrator);
                    }
                    this.show1(emp.name);
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
                this.senduser(user);
                bool = true;
                localStorage.setItem('userdata', JSON.stringify(user));
                if (emp.role === "admin") {
                    this.administrator = true;
                    this.sendAdmin(this.administrator);
                }
                this.router.navigate(['/home']);
                this.show1(emp.name);
                break;
            }
        }
        if (bool === false) {
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
        this.senduser(userData);
    }
    logout() {
        this.senduser(null);
        this.router.navigate(['/']);
        localStorage.removeItem('userdata');
        this.administrator = false;
        this.sendAdmin(this.administrator);
        this.toastr.success('Successful','Log Out ',{timeOut:3000,positionClass: 'toast-bottom-right'});
        
           
    
    }
show1 (name: string){
  this.toastr.success('Login Successful','welcome '+name,{timeOut:3000,positionClass: 'toast-bottom-right'});
}

    addEmployee(emp: any) {
        console.log(emp);
        const employee = new Employee(emp.value.name, emp.value.pass, emp.value.email, emp.value.photourl);
        this.dataservice.addEmployee(employee).subscribe(() => {
            this.router.navigate(['/']);
        });
    }


    getEmployees() {
        this.dataservice.getEmployees().subscribe((employee) => {
            this.employee = employee;
            //this.id = employee.id;
        });

    }

    //   getEmployee(id: number){
      
        // this.dataservice.getEmployee(id).subscribe((employee)=>{
        // }
    

     senduser(user: User){
        this.user.next(user);   
     }

     sendAdmin(admin: boolean)
     {
        this.admin.next(admin);
     }


}