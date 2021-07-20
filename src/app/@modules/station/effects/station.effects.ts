import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { StationActions } from '../actions';
import { StationsService } from '../services';

@Injectable()
export class StationEffects {
  fetch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StationActions.fetchAll),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      tap(console.log),
      switchMap(() => {
        return this.station
          .fetch()
          .pipe(map((stations) => StationActions.loadStations({ stations })));
      })
    );
  });
  constructor(private actions$: Actions, private station: StationsService) {}
}
