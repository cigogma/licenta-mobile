import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { StationActions, StationApiKeyActions } from '../actions';
import { StationApiKeysService, StationsService } from '../services';

@Injectable()
export class StationApiKeysEffects {
  fetch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StationApiKeyActions.fetchStation),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      switchMap(({ station }) => {
        return this.stationApiKeyService
          .fetch(station)
          .pipe(
            map((stationApiKeys) =>
              StationApiKeyActions.upsertStationApiKeys({ stationApiKeys })
            )
          );
      })
    );
  });
  constructor(
    private actions$: Actions,
    private stationApiKeyService: StationApiKeysService
  ) {}
}
