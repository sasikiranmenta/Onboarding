import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DemandDetails } from 'src/app/shared/demand.model';
import { Subscription } from 'rxjs';
import { DemandService } from '../demand.service';

@Component({
  selector: 'app-demandlist',
  templateUrl: './demandlist.component.html',
  styleUrls: ['./demandlist.component.css']
})
export class DemandlistComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private demandService: DemandService) { }

  demands: DemandDetails[];
  subscription: Subscription;
  index = 0;
  ngOnInit(): void {
    this.subscription = this.demandService.demandsChanged
      .subscribe(
        (demands: DemandDetails[]) => {
          this.demands = demands;
        });
    //this.demands = this.demandService.getDemands();
  }

  onNew() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
