// import { TestBed, inject } from "@angular/core/testing"
// import { RouterTestingModule } from '@angular/router/testing'
// import { HttpClientTestingModule } from '@angular/common/http/testing'
// import { AuthenticationService } from './auth.service'
// import { AuthGuard } from './auth.guard'
// import { User } from './user.model'
// import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router'
// import { AuthServiceConfig, GoogleLoginProvider, SocialLoginModule, AuthService } from 'angularx-social-login'
// import { DataStorageService } from '../shared/datastorage.service'



// describe('login guard', () => {
//     let guardService: AuthGuard;
//     let router: Router;
//     let authService: AuthenticationService;
//     let route: ActivatedRouteSnapshot;



//     const google_oauth: string = "1054283611108-t9mdmtqqts7j214vkj6p97ll07n3a98c.apps.googleusercontent.com";
//     let config = new AuthServiceConfig([
//         {
//             id: GoogleLoginProvider.PROVIDER_ID,
//             provider: new GoogleLoginProvider(google_oauth)
//         }
//     ]);
//     function provideConfig() {
//         return config;
//     };


//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [RouterTestingModule, HttpClientTestingModule, SocialLoginModule.initialize(config)],
//             providers: [AuthGuard, AuthenticationService, DataStorageService, AuthService, ActivatedRouteSnapshot, {
//                 provide: AuthServiceConfig,
//                 useFactory: provideConfig
//             },]
//         });

//         router = TestBed.inject(Router);
//         authService = TestBed.inject(AuthenticationService);

//         route = TestBed.inject(ActivatedRouteSnapshot);
//     });

//     let user = new User("dff", "fgh", " fg", 1);
//     // it('login guard', () => {

//     //     const s = guardService.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);
//     //     expect(s).toEqual(true);


//     // })
//     //     it('should not allow user to overcome the guard for whatever reasons', 
//     //     inject([AuthGuard], (guard:AuthGuard) => {
//     //       let fixture = TestBed.createComponent(RoutingComponent);
//     //       expect(guard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot)).toBe(false);
//     //   }));


//     const mock = <T, P extends keyof T>(obj: Pick<T, P>): T => obj as T;
//     it('should call foo',  inject([AuthGuard], (guard:AuthGuard) => {
//         // const route = mock<ActivatedRouteSnapshot, 'params'>({
//         //     params: {
//         //         val: ''
//         //     }
//         // });

//         const state = mock<RouterStateSnapshot, "url" | "root">({
//             url: "my/super/url",
//             root: route // or another mock, if required
//         });
    

//         const result = guard.canActivate(new ActivatedRouteSnapshot(), state);

// }));


// })