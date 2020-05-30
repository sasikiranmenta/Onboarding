import { Component, OnInit } from '@angular/core';
import { Socialusers } from '../socialusers.model';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';

import { SocialloginService } from '../sociallogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grad',
  templateUrl: './grad.component.html',
  styleUrls: ['./grad.component.css']
})
export class GradComponent implements OnInit {

  // response;
  // socialusers = new Socialusers();
  // constructor(
  //   public OAuth: AuthService,
  //   private SocialloginService: SocialloginService,
  //   private router: Router
  // ) { }
  ngOnInit() {
  }
  // public socialSignIn(socialProvider: string) {
  //   let socialPlatformProvider;
  //   if (socialProvider === 'google') {
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   }
  //   this.OAuth.signIn(socialPlatformProvider).then(sociausers => {
  //     console.log(socialProvider, sociausers);
  //     console.log(sociausers);
  //     this.Savesresponse(sociausers);
  //   });
  // }

  // Savesresponse(socialusers: Socialusers) {
  //   this.SocialloginService.Savesresponse(socialusers).subscribe((res: any) => {
  //     debugger;
  //     console.log(res);
  //     this.socialusers = res;
  //     this.response = res.userDetail;
  //     localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
  //     console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));
  //     this.router.navigate(['home']);
  //   })
  // }

  user: any;
   constructor(private socialAuthServ: AuthService,private router: Router){}


  login(platform: string){
    platform = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthServ.signIn(platform).then(response =>{
      console.log(response)
      if(response)
      this.router.navigate(['home']);
    });
    }
}