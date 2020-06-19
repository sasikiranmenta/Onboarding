// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute, Params } from '@angular/router';
// import { formatDate } from '@angular/common';
// import { GradDetails } from 'src/app/shared/grad.model';
// import { GradsService } from '../grads.service';
// import { LogService } from 'src/app/shared/log.service';

// @Component({
//   selector: 'app-grad-detail',
//   templateUrl: './grad-detail.component.html',
//   styleUrls: ['./grad-detail.component.css']
// })
// export class GradDetailComponent implements OnInit {

//   grad: GradDetails;
//   id: number;
//   currentdate = new Date();
//   date = formatDate(this.currentdate, 'yyyy-MM-dd', 'en');

//   constructor(private router: Router,
//     private route: ActivatedRoute,
//     private gradsService: GradsService,
//     private logService: LogService) { }




//   ngOnInit(): void {
//     this.route.params
//       .subscribe(
//         (params: Params) => {
//           this.id = +params['id'];
//           this.grad = this.gradsService.getGrad(this.id);
//         });
//     console.log(this.grad.permanentAddress);
//   }


//   onDelete() {
//     this.gradsService.deletegrad(this.grad.id);
//     //this.logService.addlog("Onboardee with " + this.grad.id + " has been deleted", this.date);
//     this.router.navigate(['/grads']);
//   }

// }
