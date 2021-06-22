import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { from, Observable } from 'rxjs';
import { finalize, map, mergeMap, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    private loadingController: LoadingController
  ) { }

  presentLoading(options: any): Observable<HTMLIonLoadingElement> {
    return from(this.loadingController.create(options)).pipe(
      tap((loading) => {
        loading.present();
      })
    );
  }

  loaderPipe() {
    return <T>(source: Observable<T>): Observable<T> => {
      const loader$ = this.presentLoading({});
      return source.pipe(
        finalize(() => loader$.subscribe((loader) => loader.dismiss()))
      )
    }
  }

}
