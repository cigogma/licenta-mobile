import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { StationDeviceActions } from '../actions';
import { StationDeviceService } from '../services';

@Injectable()
export class StationDeviceEffects {
  fetch$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StationDeviceActions.fetchStation),
      switchMap(({ station }) =>
        this.stationDeviceService.fetchStation(station).pipe(
          map((stationDevices) =>
            StationDeviceActions.upsertStationDevices({ stationDevices })
          ),
          catchError((error) => {
            this.presentError(error);
            return EMPTY;
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private alertController: AlertController,
    private stationDeviceService: StationDeviceService
  ) {}
  async presentError(error) {
    const alert = await this.alertController.create({
      message: JSON.stringify(error),
    });
    alert.present();
  }
}
