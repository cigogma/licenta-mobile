import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {
  DeviceMetricsService,
  StationDevice,
} from 'src/app/@modules/station-device';
import { MetricsResult } from 'src/app/@modules/station-device/models/metrics-result.model';

@Component({
  selector: 'app-sensor-chart',
  templateUrl: './sensor-chart.component.html',
  styleUrls: ['./sensor-chart.component.scss'],
})
export class SensorChartComponent implements OnInit {
  @Input()
  device: StationDevice;
  @Input()
  sensor: string;

  @Input()
  period: any;

  result$: Observable<MetricsResult>;
  constructor(private metrics: DeviceMetricsService) {}

  ngOnInit(): void {
    this.result$ = this.metrics
      .fetchMetrics(
        this.device,
        this.sensor,
        this.period.from,
        this.period.until,
        this.period.interval
      )
      .pipe(
        map(({ values, labels }) => {
          return {
            values,
            labels: labels.map((d) =>
              this.period.format ? moment(d).format(this.period.format) : d
            ),
          };
        }),
        shareReplay(1)
      );
  }
}
