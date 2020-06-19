import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DemandDetails } from 'src/app/shared/demand.model';
import { Subscription } from 'rxjs';
import { DemandService } from '../demand.service';
import { LogService } from 'src/app/shared/log.service';
import { formatDate } from '@angular/common';
import { User } from 'src/app/authentication/user.model';
import { AuthenticationService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-demandlist',
  templateUrl: './demandlist.component.html',
  styleUrls: ['./demandlist.component.css']
})
export class DemandlistComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private demandService: DemandService,
    private logService: LogService,
    private authService: AuthenticationService) { }

  demands: DemandDetails[];
  subscription: Subscription;
  index = 0;
  currentdate = new Date();
  user: User;
  userSub: Subscription;
  adminsub: Subscription;
  employeeSub: Subscription;
  admin = false;
  date = formatDate(this.currentdate, 'yyyy-MM-dd', 'en');
  ngOnInit(): void {
    this.adminsub = this.authService.admin.subscribe(admin => {
      console.log(this.admin);
      this.admin = admin;
    });
    this.userSub = this.authService.user.subscribe((user) => {
      this.user = user;
    });
    // this.demands = this.demandService.getDemands();
    this.subscription = this.demandService.demandsChanged
      .subscribe(
        (demands: DemandDetails[]) => {
          this.demands = demands;
          console.log(2,demands);
        });
     this.admin = this.authService.administrator;
    this.adminsub = this.authService.admin.subscribe(admin => {
      console.log(this.admin);
      this.admin = admin;
    });
    //this.demands = this.demandService.getDemands();
  }

  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.userSub.unsubscribe();
    this.adminsub.unsubscribe();
  }


  onDelete(demand: DemandDetails) {
    console.log(demand.demandid);
    this.demandService.deleteDemand(demand.demandid);
    this.logService.addlog("Demand with id " + demand.demandid + " has been deleted", this.date, this.user.id);
    this.router.navigate(['/demands']);
  }

}
