import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GradsService } from '../grads.service';
import { GradDetails } from '../../shared/grad.model';
import { Subscription } from 'rxjs';
import { LogService } from 'src/app/shared/log.service';
import { formatDate } from '@angular/common';
import { AuthenticationService } from 'src/app/authentication/auth.service';
import { User } from 'src/app/authentication/user.model';
@Component({
  selector: 'app-gradlist',
  templateUrl: './gradlist.component.html',
  styleUrls: ['./gradlist.component.css']
})
export class GradlistComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gradsService: GradsService,
              private authService: AuthenticationService,
              private logService: LogService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.userSub.unsubscribe();
  }
  
  grads: GradDetails[];
  subscription: Subscription;
  index = 0;
  idsearch = null;
  currentdate = new Date();
  date = formatDate(this.currentdate, 'yyyy-MM-dd', 'en');
  user: User;
  userSub: Subscription;


  ngOnInit(): void {
  this.userSub = this.authService.user.subscribe((user)=>{
this.user = user;
  })
    this.subscription = this.gradsService.gradsChanged
      .subscribe(
        (grads: GradDetails[]) => {
          this.grads = grads;
        }
      );
    //this.grads = this.gradsService.getGrads();
  }

  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  search() {

    if (this.idsearch != null) {
      for (let grad of this.grads) {
        if (grad.id == this.idsearch) {
          this.router.navigate([this.index], { relativeTo: this.route });
        }
        this.index++;

      }
    }
    else {
      this.router.navigate(['grads']);
    }
    this.index = 0;
  }


  onDelete(grad: GradDetails) {
    this.gradsService.deletegrad(grad.id);
    this.logService.addlog("Onboardee with " + grad.id + " has been deleted", this.date, this.user.id);
    this.router.navigate(['/grads']);
  }
}
