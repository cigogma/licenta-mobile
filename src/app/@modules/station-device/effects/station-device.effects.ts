import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { StationDeviceActions } from '../actions';
import { StationDeviceService } from '../services';

@Injectable()
export class StationDeviceEffects {
  fetch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StationDeviceActions.fetchStation),
      switchMap(({ station }) =>
        this.stationDeviceService.fetch().pipe(
          map((data) => FeatureActions.actionSuccess({ data })),
          catchError((error) => of(FeatureActions.actionFailure({ error })))
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private stationDeviceService: StationDeviceService
  ) {}
}
