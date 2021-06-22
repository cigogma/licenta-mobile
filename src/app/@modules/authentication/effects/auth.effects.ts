import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { defer, from, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  StorageKey,
  StorageService,
} from '../../storage/services/storage.service';

import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  authorized$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.authorized),
        tap((action) => {
          this.storage.setData(StorageKey.AUTH_TOKEN, action.token);
        })
      ),
    { dispatch: false }
  );

  deauthorized$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.unauthorized),
        tap((action) => {
          this.storage.clearData(StorageKey.AUTH_TOKEN);
          this.router.navigateByUrl('/auth', { replaceUrl: true });
        })
      ),
    { dispatch: false }
  );

  init$: Observable<TypedAction<any>> = createEffect(() =>
    defer(() => {
      return from(this.storage.getData(StorageKey.AUTH_TOKEN)).pipe(
        map((data) => {
          if (data) {
            return AuthActions.authorized({ token: data });
          }
          return AuthActions.loaded();
        }),
        catchError((err) => {
          console.error(err);
          return of(AuthActions.loaded());
        })
      );
    })
  );
  constructor(
    private actions$: Actions,
    private router: Router,
    private store: Store,
    private storage: StorageService
  ) {}
}
