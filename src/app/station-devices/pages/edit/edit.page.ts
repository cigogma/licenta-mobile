import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, finalize, first, switchMap, take } from 'rxjs/operators';

import {
  StationDevice,
  StationDeviceActions,
  StationDeviceSelectors,
  StationDeviceService,
} from 'src/app/@modules/station-device';

@Component({
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  device$: Observable<StationDevice>;
  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private store: Store,
    private stationDeviceService: StationDeviceService,
    private toast: ToastController,
    private modalController: ModalController,
    private loading: LoadingController
  ) {}
  ngOnInit(): void {
    this.device$ = this.activatedRoute.params.pipe(
      switchMap(({ stationDevice }) => {
        return this.store.select(
          StationDeviceSelectors.selectId(stationDevice)
        );
      }),
      filter((data) => !!data)
    );
  }
  async submit() {
    const loader = await this.loading.create({ message: 'Loading...' });
    loader.present();
    const data = this.editForm.getRawValue();
    this.device$
      .pipe(
        first(),
        switchMap((stationDevice) =>
          this.stationDeviceService.update(stationDevice, data)
        ),
        finalize(() => loader.dismiss())
      )
      .subscribe((data) => {
        this.route.navigate(['..'], {
          relativeTo: this.activatedRoute,
        });
      });
  }
}
