import { Component, OnInit } from '@angular/core';

//import * as CanvasJS from '../../../assets/canvasjs.min';
import { Trendservice } from '../trends.service';
import { Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  mapskills = new Map();
  constructor(private trendsService: Trendservice) { }
  t = 5;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(25,25,25,0.3)'],
    },
  ];
  ngOnInit(): void {
     this.mapskills = this.trendsService.getSkills();
     for (let entry of Array.from(this.mapskills.entries())) {
      let key = entry[0];
      let value = entry[1];
      this.pieChartLabels.push(key);
      this.pieChartData.push(value);
    }
    // console.log(this.mapskills.get("PYTHON"));

    // let chart = new CanvasJS.Chart("chartContainer", {
    //   theme: "light2",
    //   animationEnabled: true,
    //   exportEnabled: true,
    //   title: {
    //     text: "Technologies On Demand"
    //   },
    //   data: [{
    //     type: "pie",
    //     showInLegend: true,
    //     toolTipContent: "<b>{name}</b>: {y} (#percent%)",
    //     indexLabel: "{name} - #percent%",
    //     dataPoints: [

    //       { y: this.mapskills.get("JAVA"), name: "JAVA" },
    //       { y: this.mapskills.get("ANGULAR"), name: "ANGULAR" },
    //       { y: this.mapskills.get("SPRING"), name: "SPRING" },
    //       { y: this.mapskills.get("PYTHON"), name: "PYTHON" }


    //     ]
    //   }]
    // });
    
    // chart.render();
  }

}
