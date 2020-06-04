import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GradsService } from '../grads.service';
import { GradDetails } from 'src/app/shared/grad.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';
import { DataStorageService } from 'src/app/shared/datastorage.service';
import { LogService } from 'src/app/shared/log.service';
import { AuthenticationService } from 'src/app/authentication/auth.service';
import { User } from 'src/app/authentication/user.model';
import { Subscription } from 'rxjs';
import { DemandDetails } from 'src/app/shared/demand.model';
import { DemandService } from 'src/app/demand/demand.service';

@Component({
  selector: 'app-grad-edit',
  templateUrl: './grad-edit.component.html',
  styleUrls: ['./grad-edit.component.css']
})
export class GradEditComponent implements OnInit, OnDestroy {

  id: number;
  grad: GradDetails;
  editmode = false;
  gradform: FormGroup;
  grad1: GradDetails;
  currentdate = new Date();
  date = formatDate(this.currentdate, 'yyyy-MM-dd', 'en');
  user: User;
  userSub: Subscription;
  subscription: Subscription;
  skill='';

  demands: DemandDetails[];
  constructor(private route: ActivatedRoute,
    private router: Router,
    private gradsService: GradsService,
    private datastorage: DataStorageService,
    private logService: LogService,
    private authService: AuthenticationService,
    private demandService: DemandService
  ) { }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
   // this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.gradsService.setGrads();
    this.userSub = this.authService.user.subscribe((user) => {
      this.user = user;
    });
    this.datastorage.fetchDemand().subscribe((demands)=>{
               this.demands = demands;
    });
    console.log(this.demands)
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;
      this.initform();
    });
  }


  private initform() {
    let id;
    let demandId;
    let gradname = '';
    let grademail = '';
    let gradcollege = '';
    let gradcgpa;
    let gradpersonalnumber;
    let gradpermanentaddress = '';
    let gradpresentaddress = '';
    let gradlocation = '';
    let gradonboarstart;
    let gradeta;
    let gradbgc = '';
    let gradonboardingstatus = '';
    if (this.editmode) {
      this.grad1 = this.gradsService.getGrad(this.id);
    }

    if (this.editmode) {
      const grad = this.gradsService.getGrad(this.id);
      id = grad.id;
      demandId = grad.demandId;
      gradname = grad.name;
      grademail = grad.email;
      gradcollege = grad.college;
      gradcgpa = grad.cgpa;
      gradpersonalnumber = grad.personalNumber;
      gradpermanentaddress = grad.permanentAddress;
      gradpresentaddress = grad.presentAddress;
      gradlocation = grad.location;
      gradonboarstart = formatDate(grad.onboardingStart, 'yyyy-MM-dd', 'en');
      gradeta = formatDate(grad.eta, 'yyyy-MM-dd', 'en');
      gradbgc = grad.bgvCheck;
      gradonboardingstatus = grad.onboardingStatus;
      console.log(gradeta);
      this.skill = grad.college;
    }
    this.gradform = new FormGroup({
      demandId: new FormControl(demandId, Validators.required),
      name: new FormControl(gradname, Validators.required),
      email: new FormControl(grademail, Validators.required),
      college: new FormControl(gradcollege, Validators.required),
      cgpa: new FormControl(gradcgpa, Validators.required),
      personalNumber: new FormControl(gradpersonalnumber, Validators.required),
      permanentAddress: new FormControl(gradpermanentaddress, Validators.required),
      presentAddress: new FormControl(gradpresentaddress, Validators.required),
      location: new FormControl(gradlocation, Validators.required),
      onboardingStart: new FormControl(gradonboarstart, Validators.required),
      eta: new FormControl(gradeta, Validators.required),
      bgvCheck: new FormControl(gradbgc, Validators.required),
      onboardingStatus: new FormControl(gradonboardingstatus, Validators.required)

    }

    );




  }
  onSubmit() {
    if (this.editmode) {
      this.gradsService.updateGrad(this.grad1.id, this.gradform.value);
      console.log(this.user.id);
      this.logService.addlog("onboardee with id " + this.grad1.id + " has been updated", this.date,this.user.id);

    } else {
      this.gradsService.addGrad(this.gradform.value);
      this.logService.addlog("new onboardee has been created ", this.date,this.user.id);
    }
    this.router.navigate(['/grads']);
  }

  onClear() {
    this.gradform.reset();
    this.router.navigate(['/grads']);
  }



}
