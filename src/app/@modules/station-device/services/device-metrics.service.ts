import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { StationDevice } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DeviceMetricsService {
  constructor(private api: ApiService) {}

  fetchMetrics(
    device: StationDevice,
    type: string,
    from: Date,
    until: Date,
    interval: string
  ) {
    const query = {
      type,
      from: from.toISOString(),
      until: until.toISOString(),
      interval,
    };
    return this.api
      .get(`devices/${device.id}/metrics`, query)
      .pipe(map(({ result }) => result));
  }
}
