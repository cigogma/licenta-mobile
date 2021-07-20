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

  public fetch(station: Station) {
    return this.api
      .get(`stations/${station.id}/`)
      .pipe(map((data: any) => data.station_device as StationDevice[]));
  }

  public delete(stationDevice: StationDevice) {
    return this.api
      .delete(`stations/${stationDevice.station_id}/device/${stationDevice.id}`)
      .pipe(
        tap((station) => {
          this.store.dispatch(
            StationDeviceActions.deleteStationDevice({ id: stationDevice.id })
          );
        })
      );
  }

  public update(id: number, data: Partial<Station>) {
    // return this.api.put(`stations/${id}`, data).pipe(
    //   map((data: any) => data.station as Station),
    //   tap((station) => {
    //     this.store.dispatch(
    //       StationDeviceActions.updateStation({
    //         station: { changes: station, id },
    //       })
    //     );
    //   })
    // );
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
