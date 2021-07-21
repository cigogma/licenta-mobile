import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { StationActions, StationApiKeyActions } from '../actions';
import { Station, StationApiKey } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StationApiKeysService {
  constructor(private api: ApiService, private store: Store) {}

  public fetch(station: Station) {
    return this.api
      .get(`stations/${station.id}/keys`)
      .pipe(map((data: any) => data.station_api_keys as StationApiKey[]));
  }

  public delete(key: StationApiKey) {
    const { id, station_id } = key;
    return this.api.delete(`stations/${station_id}/keys/${id}`).pipe(
      tap(() => {
        this.store.dispatch(StationApiKeyActions.deleteStationApiKey({ id }));
      })
    );
  }

  // public update(id: number, data: Partial<Station>) {
  //   return this.api.put(`stations/${id}`, data).pipe(
  //     map((data: any) => data.station as Station),
  //     tap((station) => {
  //       this.store.dispatch(
  //         StationActions.updateStation({ station: { changes: station, id } })
  //       );
  //     })
  //   );
  // }

  public create(station: Station, name: string) {
    return this.api.post(`stations/${station.id}/keys`, { name }).pipe(
      map((data: any) => {
        return {
          token: data.station_api_key as StationApiKey,
          plainTextKey: data.plain_text_key as string,
        };
      }),
      tap(({ token }) => {
        this.store.dispatch(
          StationApiKeyActions.addStationApiKey({ stationApiKey: token })
        );
      })
    );
  }
}
