import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  timeout,
  withLatestFrom,
} from 'rxjs/operators';
import { AuthSelectors } from '../selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public store: Store, public router: Router) {}
  canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(AuthSelectors.selectToken).pipe(
      withLatestFrom(this.store.select(AuthSelectors.selectLoaded)),
      filter(([token, loaded]) => loaded),
      timeout(3000),
      map(([token, loaded]) => {
        if (!token) {
          return this.router.parseUrl('/auth');
        }
        return true;
      }),
      catchError(() => of(this.router.parseUrl('/auth')))
    );
  }
}
