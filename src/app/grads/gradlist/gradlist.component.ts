import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GradsService } from '../grads.service';
import { GradDetails } from '../../shared/grad.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-gradlist',
  templateUrl: './gradlist.component.html',
  styleUrls: ['./gradlist.component.css']
})
export class GradlistComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gradsService: GradsService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  grads: GradDetails[];
  subscription: Subscription;
  index = 0;
  idsearch = null;


  ngOnInit(): void {

    this.subscription = this.gradsService.gradsChanged
      .subscribe(
        (grads: GradDetails[]) => {
          this.grads = grads;
        }
      );
    this.grads = this.gradsService.getGrads();
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
}
