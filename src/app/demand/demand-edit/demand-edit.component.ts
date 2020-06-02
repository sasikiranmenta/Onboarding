import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/datastorage.service';
import { DemandService } from '../demand.service';
import { DemandDetails } from 'src/app/shared/demand.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DemandComponent } from '../demand.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-demand-edit',
  templateUrl: './demand-edit.component.html',
  styleUrls: ['./demand-edit.component.css']
})
export class DemandEditComponent implements OnInit {

  id: number;
  demand: DemandDetails;
  editmode = false;
  demandform: FormGroup;
  demand1: DemandDetails;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private demandservice: DemandService,
              private datastorage: DataStorageService) { }

  ngOnInit(): void {
    this.demandservice.setDemands();
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;
      this.initform();

    });
  }

  private initform() {

    let skills = '';
    let count;
    let location = '';
    let start = '';
    let status = '';
    let empid;
    if (this.editmode) {
      this.demand1 = this.demandservice.getDemand(this.id);
    }

    if (this.editmode) {
      const demand = this.demandservice.getDemand(this.id);
      skills = demand.skills;
      count = demand.count;
      location = demand.location;
      start = formatDate(demand.start, 'yyyy-MM-dd', 'en');
      status = demand.status;
      empid = demand.empid;
    }

    this.demandform = new FormGroup({
      skills: new FormControl(skills, Validators.required),
      count: new FormControl(count, Validators.required),
      location: new FormControl(location, Validators.required),
      start: new FormControl(start, Validators.required),
      status: new FormControl(status, Validators.required),
      empid: new FormControl(empid, Validators.required)
    });
  }

  onSubmit(){
    if(this.editmode){
      this.demandservice.updateDemand(this.demand1.demandid,this.demandform.value);
    }else{
      this.demandservice.addDemand(this.demandform.value);
    }
    this.router.navigate(['/demands']);
  }

  onClear(){
    this.demandform.reset();
    this.router.navigate(['/demands']);
  }

}
