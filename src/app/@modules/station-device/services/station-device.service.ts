import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { Station } from '../../station/models';
import { StationDeviceActions } from '../actions';
import { StationDevice } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StationDeviceService {
  constructor(private api: ApiService, private store: Store) {}

  public fetchStation(station: Station) {
    return this.api
      .get(`stations/${station.id}/devices`)
      .pipe(map((data: any) => data.station_devices as StationDevice[]));
  }

  public delete(stationDevice: StationDevice) {
    return this.api
      .delete(
        `stations/${stationDevice.station_id}/devices/${stationDevice.id}`
      )
      .pipe(
        tap((station) => {
          this.store.dispatch(
            StationDeviceActions.deleteStationDevice({ id: stationDevice.id })
          );
        })
      );
  }

  public update(stationDevice: StationDevice, data: Partial<StationDevice>) {
    return this.api
      .put(
        `stations/${stationDevice.station_id}/devices/${stationDevice.id}`,
        data
      )
      .pipe(
        map((data: any) => data.station_device as StationDevice),
        tap((stationDevice) => {
          this.store.dispatch(
            StationDeviceActions.updateStationDevice({
              stationDevice: { changes: stationDevice, id: stationDevice.id },
            })
          );
        })
      );
  }

  // public create(data: Partial<Station>) {
  //   return this.api.post('stations', data).pipe(
  //     map((data: any) => data.station as Station),
  //     tap((station) => {
  //       this.store.dispatch(StationDeviceActions.addStation({ station }));
  //     })
  //   );
  // }
}
