import { Component, OnInit, Input } from '@angular/core';
import { DemandDetails } from 'src/app/shared/demand.model';

@Component({
  selector: 'app-demanditem',
  templateUrl: './demanditem.component.html',
  styleUrls: ['./demanditem.component.css']
})
export class DemanditemComponent implements OnInit {
@Input() demand: DemandDetails;
@Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
