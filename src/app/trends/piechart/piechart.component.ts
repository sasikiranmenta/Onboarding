import { Component, OnInit } from '@angular/core';

import * as CanvasJS from '../../../assets/canvasjs.min';
import { Trendservice } from '../trends.service';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  mapskills = new Map();
  constructor(private trendsService: Trendservice) { }
  t = 5;

  ngOnInit(): void {
    this.mapskills = this.trendsService.getSkills();
    console.log(this.mapskills.get("PYTHON"));
    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Technologies On Demand"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [

          { y: this.mapskills.get("JAVA"), name: "JAVA" },
          { y: this.mapskills.get("ANGULAR"), name: "ANGULAR" },
          { y: this.mapskills.get("SPRING"), name: "SPRING" },
          { y: this.mapskills.get("PYTHON"), name: "PYTHON" }
           

      ]
    }]
});

  chart.render();
}

}
