import { Component, OnInit } from '@angular/core';
import { Trendservice } from '../trends.service';

@Component({
  selector: 'app-hiringmanager',
  templateUrl: './hiringmanager.component.html',
  styleUrls: ['./hiringmanager.component.css']
})
export class HiringmanagerComponent implements OnInit {
  myMapHm = new Map();

  data = [10, 6, 0];

  constructor(private trendsService: Trendservice) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [{ data: [], label: 'manager ID' }];
  ngOnInit() {
    this.myMapHm = this.trendsService.getHm();
    for (let entry of Array.from(this.myMapHm.entries())) {
      let key = entry[0];
      let value = entry[1];
      this.barChartLabels.push(key);
      this.data.push(value);
      this.barChartData[0].data.push(value);
    }
    this.barChartData[0].data.push(0);


  }

}
