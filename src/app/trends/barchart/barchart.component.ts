import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min';
import { Trendservice } from '../trends.service';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
myMaploc = new Map();
  constructor(private tredsService: Trendservice) { }

  ngOnInit(): void {
    this.myMaploc = this.tredsService.getLoc();
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Location Trends"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: this.myMaploc.get("BANGLORE"), label: "BANGLORE" },
          { y: this.myMaploc.get("MUMBAI"), label: "MUMBAI" }
        ]
      }]
    });
    chart.render();
  }

}
