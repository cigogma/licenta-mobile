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
    const form_params = {
      grant_type: 'password',
      client_id: environment.clientId,
      client_secret: environment.clientSecret,
      username: data.email,
      password: data.password,
      scope: '*',
    };

    return this.api.post('/oauth/authorize', { form_params }).pipe(
      map((data) => {
        return data;
      }),
      tap((res: any) => {
        this.store.dispatch(AuthActions.authorized({ token: res.token }));
      })
    );
  }
}
