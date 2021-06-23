import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, tap, map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { AuthActions } from '../actions';

export interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private api: ApiService, private store: Store) {}

  public login(data: LoginData) {
    return this.api.post('login', data).pipe(
      map((data) => {
        return data;
      }),
      tap((res: any) => {
        this.store.dispatch(AuthActions.authorized({ token: res.token }));
      })
    );
  }
}
