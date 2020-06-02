import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GradDetails } from 'src/app/shared/grad.model';
import { GradsService } from '../grads.service';

@Component({
  selector: 'app-grad-detail',
  templateUrl: './grad-detail.component.html',
  styleUrls: ['./grad-detail.component.css']
})
export class GradDetailComponent implements OnInit {

  grad: GradDetails;
  id: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private gradsService: GradsService,) { }




  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.grad = this.gradsService.getGrad(this.id);
        });
    console.log(this.grad.permanentAddress);
  }

  
  onDelete() {
    this.gradsService.deletegrad(this.grad.id);
    this.router.navigate(['/grads']);
  }

}
