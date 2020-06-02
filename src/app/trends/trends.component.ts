import { Component, OnInit } from '@angular/core';
import { Trendservice } from './trends.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})

export class TrendsComponent implements OnInit {

  constructor(private trendsservice: Trendservice) { }

  ngOnInit(): void {
       this.trendsservice.onGet();
  }




}
