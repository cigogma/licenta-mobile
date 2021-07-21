import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';
import { filter, finalize, first, switchMap, take, tap } from 'rxjs/operators';
import {
  Station,
  StationSelectors,
  StationsService,
} from 'src/app/@modules/station';
import { StationDevice } from 'src/app/@modules/station-device';
import { StationDeviceActions } from 'src/app/@modules/station-device/actions';
import { StationDeviceSelectors } from 'src/app/@modules/station-device/selectors';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss'],
})
export class StationComponent implements OnInit {
  station$: Observable<Station>;
  stationDevices$: Observable<StationDevice[]>;

  constructor(
    private station: StationsService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private store: Store,
    private loading: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.station$ = this.activatedRoute.params.pipe(
      switchMap(({ station }) => {
        return this.store.select(StationSelectors.selectId(station));
      }),
      filter((s) => !!s)
    );
    this.station$
      .pipe(take(1))
      .subscribe((station) =>
        this.store.dispatch(StationDeviceActions.fetchStation({ station }))
      );

    this.stationDevices$ = this.station$.pipe(
      take(1),
      switchMap((station) =>
        this.store.select(
          StationDeviceSelectors.selectAllFromStation(station.id)
        )
      )
    );
  }

  async remove() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to delete this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Okay',
          handler: () => {
            this.submitDelete();
          },
        },
      ],
    });

    await alert.present();
  }
  async submitDelete() {
    const loader = await this.loading.create({ message: 'Loading...' });
    loader.present();
    this.station$
      .pipe(
        first(),
        switchMap((station) => this.station.delete(station.id)),
        finalize(() => loader.dismiss())
      )
      .subscribe((data) => {
        this.route.navigate(['..'], {
          relativeTo: this.activatedRoute,
        });
      });
  }
}
