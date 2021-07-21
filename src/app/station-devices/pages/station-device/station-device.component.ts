import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import {
  DeviceMetricsService,
  StationDevice,
} from 'src/app/@modules/station-device';
import { StationDeviceSelectors } from 'src/app/@modules/station-device';

const h = 3600000;
const day = 86400000;

@Component({
  selector: 'app-station-device',
  templateUrl: './station-device.component.html',
  styleUrls: ['./station-device.component.scss'],
})
export class StationDeviceComponent implements OnInit {
  device$: Observable<StationDevice>;
  periods = [
    {
      label: 'last 30 min',
      from: new Date(Date.now() - h / 2),
      until: new Date(),
      interval: '3 minute',
      format: 'HH:mm',
    },
    {
      label: 'last 12 h',
      from: new Date(Date.now() - h * 12),
      until: new Date(),
      interval: '1 hour',
      format: 'HH:mm',
    },
    {
      label: 'last 7 days',
      from: new Date(Date.now() - day * 7),
      until: new Date(),
      interval: '1 day',
      format: 'DD/M',
    },
  ];

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private deviceMetrics: DeviceMetricsService
  ) {}

  ngOnInit(): void {
    this.device$ = this.activatedRoute.params.pipe(
      switchMap(({ stationDevice }) => {
        return this.store.select(
          StationDeviceSelectors.selectId(stationDevice)
        );
      }),
      filter((s) => !!s)
    );
  }
}
