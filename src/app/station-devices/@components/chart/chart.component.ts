import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input()
  data: number[];
  @Input()
  labels: string[];
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        // {
        //   id: 'y-axis-1',
        //   position: 'right',
        //   gridLines: {
        //     color: 'rgba(255,255,255,0.3)',
        //   },
        //   ticks: {
        //     fontColor: 'white',
        //   },
        // },
      ],
    },
    annotation: {
      // annotations: [
      //   {
      //     type: 'line',
      //     mode: 'vertical',
      //     scaleID: 'x-axis-0',
      //     value: 'March',
      //     borderColor: 'white',
      //     borderWidth: 2,
      //     label: {
      //       enabled: true,
      //       fontColor: 'white',
      //       content: 'LineAnno',
      //     },
      //   },
      // ],
    },
  };
  public lineChartColors: Color[] = [
    {
      // grey
      backgroundColor: 'rgba(66,140,255,0.2)',
      borderColor: 'rgba(66,140,255,1)',
      pointBackgroundColor: 'rgba(66,140,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(66,140,255,0.8)',
    },
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {}

  ngOnInit(): void {
    this.lineChartLabels = this.labels;
    this.lineChartData = [{ data: this.data, label: 'Series A' }];
    this.chart.update();
  }
}
