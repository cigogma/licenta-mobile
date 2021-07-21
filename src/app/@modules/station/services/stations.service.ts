import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { StationActions } from '../actions';
import { Station } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  constructor(private api: ApiService, private store: Store) {}

  public fetch() {
    return this.api
      .get('stations')
      .pipe(map((data: any) => data.stations as Station[]));
  }

  public delete(id: number) {
    return this.api.delete(`stations/${id}`).pipe(
      tap((station) => {
        this.store.dispatch(StationActions.deleteStation({ id }));
      })
    );
  }

  public update(id: number, data: Partial<Station>) {
    return this.api.put(`stations/${id}`, data).pipe(
      map((data: any) => data.station as Station),
      tap((station) => {
        this.store.dispatch(
          StationActions.updateStation({ station: { changes: station, id } })
        );
      })
    );
  }

  public create(data: Partial<Station>) {
    return this.api.post('stations', data).pipe(
      map((data: any) => data.station as Station),
      tap((station) => {
        this.store.dispatch(StationActions.addStation({ station }));
      })
    );
  }
}
