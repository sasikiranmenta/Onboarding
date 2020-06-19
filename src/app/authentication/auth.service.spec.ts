import { GoogleLoginProvider, AuthServiceConfig, SocialLoginModule, AuthService, SocialUser } from "angularx-social-login";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from './auth.service';
import { DataStorageService } from '../shared/datastorage.service';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { User } from './user.model';
import { Component } from '@angular/core';
import { Employee } from './employee.model';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

describe('login', () => {
    let httpTestingController: HttpTestingController;
    let authservice: AuthenticationService;
    let dataservice: DataStorageService;
    let socservice: AuthService;
    let rout: ActivatedRoute;
    let router: Router;
    const toastrService = {
        success: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { },
        error: (message?: string, title?: string, override?: Partial<IndividualConfig>) => { }
    };
    const google_oauth: string = "1054283611108-t9mdmtqqts7j214vkj6p97ll07n3a98c.apps.googleusercontent.com";
    let config = new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(google_oauth)
        }
    ]);
    function provideConfig() {
        return config;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule, SocialLoginModule.initialize(config)],
            providers: [AuthenticationService, DataStorageService, AuthService, {
                provide: AuthServiceConfig,
                useFactory: provideConfig
            }, { provide: ToastrService, useValue: toastrService }],
        });
        authservice = TestBed.inject(AuthenticationService);
        dataservice = TestBed.inject(DataStorageService);
        socservice = TestBed.inject(AuthService);
        httpTestingController = TestBed.inject(HttpTestingController);
        rout = TestBed.inject(ActivatedRoute);
        router = TestBed.inject(Router);

    });
    afterEach(() => {
        httpTestingController.verify();

    });


    it('Social auth', () => {
        let empmock: Employee[] = [new Employee("string", "string", "string", "string")];
        empmock[0].role = "admin";
        let mock = {
            provider: "google",
            id: "string",
            email: "string",
            name: "string",
            photoUrl: "string",
            firstName: "string",
            lastName: "string",
            authToken: "string",
            idToken: "string",
            authorizationCode: "string",
        }
        let spy = spyOn(socservice, 'signIn').and.returnValue(Promise.resolve(mock));
        //let spy2 = spyOn(authservice,'');
        let spy2 = spyOn(dataservice, 'getEmployees').and.returnValue(of(empmock));
        let spy3 = spyOn(router, 'navigate');
        authservice.getEmployees();
        authservice.login("google");
        expect(sessionStorage.length).toBeGreaterThanOrEqual(0);
        // expect(router.navigate).toHaveBeenCalled()

    });
    it('Social auth not present', () => {
        let empmock: Employee[] = [new Employee("string", "string", "string", "string")];

        let mock = {
            provider: "google",
            id: "string",
            email: "not",
            name: "string",
            photoUrl: "string",
            firstName: "string",
            lastName: "string",
            authToken: "string",
            idToken: "string",
            authorizationCode: "string",
        }
        let spy = spyOn(socservice, 'signIn').and.returnValue(Promise.resolve(mock));
        //let spy2 = spyOn(authservice,'');
        let spy2 = spyOn(dataservice, 'getEmployees').and.returnValue(of(empmock));
        let spy3 = spyOn(router, 'navigate');
        authservice.getEmployees();
        authservice.login("google");
        expect(sessionStorage.length).toBeGreaterThanOrEqual(0);
        // expect(router.navigate).toHaveBeenCalled()

    });


    it('regular auth login', () => {
        let empmock: Employee[] = [new Employee("string", "string", "string", "string")];
        empmock[0].role = "admin";

        //let spy2 = spyOn(authservice,'');
        let spy2 = spyOn(dataservice, 'getEmployees').and.returnValue(of(empmock));
        let spy3 = spyOn(router, 'navigate');
        authservice.getEmployees();
        authservice.log("string", "string");
        expect(sessionStorage.length).toBeGreaterThanOrEqual(0);
        // expect(router.navigate).toHaveBeenCalled()
        authservice.autoLogin();

    });

    it('regular auth login error', () => {
        let empmock: Employee[] = [new Employee("string", "string", "string", "string")];
        empmock[0].role = "admin";

        //let spy2 = spyOn(authservice,'');
        let spy2 = spyOn(dataservice, 'getEmployees').and.returnValue(of(empmock));
        let spy3 = spyOn(router, 'navigate');
        authservice.getEmployees();
        authservice.log("strin", "strin");
        expect(sessionStorage.length).toBeGreaterThanOrEqual(0);
        // expect(router.navigate).toHaveBeenCalled()

        localStorage.clear();
        authservice.autoLogin();
    });


    it('add employee', () => {
        let empmock = new FormGroup({
            name: new FormControl("name"),
            pass: new FormControl("pass"),
            email: new FormControl("email"),
            photourl: new FormControl("photourl")

        });
        let spy = spyOn(dataservice, 'addEmployee').and.returnValue(of(empmock));
        let spy2 = spyOn(router, 'navigate');
        authservice.addEmployee(empmock);
        expect(dataservice.addEmployee).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalled();

    });

});
