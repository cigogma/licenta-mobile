import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { AuthActions } from './@modules/authentication';
import { StationActions } from './@modules/station';

@Injectable()
export class AppEffects {
  onAuth$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authorized),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      mergeMap(() => [StationActions.fetchAll()])
    );
  });

  constructor(private actions$: Actions) {}
}
