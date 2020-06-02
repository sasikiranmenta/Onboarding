import { Component, OnInit } from '@angular/core';
import { DemandService } from './demand.service';

@Component({
  selector: 'app-demand',
  templateUrl: './demand.component.html',
  styleUrls: ['./demand.component.css']
})
export class DemandComponent implements OnInit {

  constructor(private demandservice: DemandService) { }

  ngOnInit(): void {
    this.demandservice.setDemands();
  }

}
