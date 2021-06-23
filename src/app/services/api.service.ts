import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  catchError,
  filter,
  first,
  map,
  skipWhile,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { from } from 'rxjs';
import { AuthSelectors } from '../@modules/authentication';

export enum RequestType {
  POST = 'POST',
  GET = 'GET',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost/api/';
  private nativeHTTP = false;
  constructor(
    private http: HttpClient,
    private platform: Platform,
    private store: Store
  ) {}

  post(moduleName: string, data: any) {
    return this.request(RequestType.POST, moduleName, data);
  }

  put(moduleName: string, data: any) {
    return this.request(RequestType.PUT, moduleName, data);
  }

  get(moduleName: string, data?: any) {
    return this.request(RequestType.GET, moduleName, data);
  }

  delete(moduleName: string, data?: any) {
    return this.request(RequestType.DELETE, moduleName, data);
  }

  private request(
    method: RequestType,
    moduleName: string,
    data?: any
  ): Observable<any> {
    let headers = new HttpHeaders({});
    if (!(data instanceof FormData)) {
      headers = headers.append('content-type', 'application/json');
    }
    headers = headers.append('Accept', 'application/json');
    return this.store.select(AuthSelectors.selectToken).pipe(
      withLatestFrom(this.store.select(AuthSelectors.selectLoaded)),
      filter(([token, isLoading]) => {
        return isLoading;
      }),
      map(([token, isLoading]) => token),
      first(),
      switchMap((token) => {
        if (!!token) {
          headers = headers.append('Authorization', 'Bearer ' + token);
        }
        const options = {
          headers,
          params: {},
        };
        let response: Observable<object>;
        switch (method) {
          case RequestType.POST:
            response = this.http.post(this.apiUrl + moduleName, data, options);
            break;
          case RequestType.DELETE:
            response = this.http.delete(this.apiUrl + moduleName, options);
            break;
          case RequestType.PUT:
            response = this.http.put(this.apiUrl + moduleName, data, options);
            break;
          case RequestType.GET:
          default:
            options.params = new HttpParams({ fromObject: data });
            response = this.http.get(this.apiUrl + moduleName, options);
            break;
        }
        response = response.pipe(
          catchError((err) => {
            const errors: any = this.parseError(err.error);
            switch (err.status) {
              case 401:
              case 403:
                if (!!token) {
                  // this.store.dispatch(AuthActions.unauthorized());
                }
                break;
            }
            return throwError(errors);
          })
        );
        return response;
      })
    );
  }

  private parseError(errorResponse: any): any {
    try {
      if (typeof errorResponse !== 'object' || errorResponse === null) {
        throw new Error('Is not an object');
      }
    } catch (e) {
      return { message: 'Could not communicate with the server!' };
    }
    return errorResponse;
  }
}
