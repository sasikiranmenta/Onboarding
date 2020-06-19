import { Component, OnInit } from '@angular/core';
//import * as CanvasJS from '../../../assets/canvasjs.min';
import { Trendservice } from '../trends.service';
import { Label, Color } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  myMaploc = new Map();
  constructor(private trendsService: Trendservice) { }
  // public barChartOptions = {
  //   scaleShowVerticalLines: false,
  //   responsive: true
  // };
  // data = [10, 6, 0];
  // public barChartLabels: string[] = [];
  // public barChartType = 'bar';
  // public barChartLegend = true;
  // public barChartData = [{ data: [], label: 'Locations' }];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  data = [10, 6, 0];
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartColors: Color[] = [
    { backgroundColor: 'red' },
    { backgroundColor: 'green' },
  ];

  public barChartData = [{ data: [], label: 'Locations' }];

  ngOnInit(): void {
    this.myMaploc = this.trendsService.getLoc();
    for (let entry of Array.from(this.myMaploc.entries())) {
      let key = entry[0];
      let value = entry[1];
      this.barChartLabels.push(key);
      this.data.push(value);
      this.barChartData[0].data.push(value);
    }

     this.barChartData[0].data.push(0);

    // this.myMaploc = this.tredsService.getLoc();
    // let chart = new CanvasJS.Chart("chartContainer", {
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: "Location Trends"
    //   },
    //   data: [{
    //     type: "column",
    //     dataPoints: [
    //       { y: this.myMaploc.get("BANGLORE"), label: "BANGLORE" },
    //       { y: this.myMaploc.get("MUMBAI"), label: "MUMBAI" }
    //     ]
    //   }]
    // });
    // chart.render();
  }

}
