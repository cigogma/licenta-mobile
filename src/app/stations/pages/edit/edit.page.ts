import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, finalize, first, switchMap, take } from 'rxjs/operators';
import {
  Station,
  StationApiKey,
  StationApiKeyActions,
  StationSelectors,
  StationsService,
} from 'src/app/@modules/station';

@Component({
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  station$: Observable<Station>;
  keys$: Observable<StationApiKey[]>;
  constructor(
    private station: StationsService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private store: Store,
    private toast: ToastController,
    private loading: LoadingController
  ) {}
  ngOnInit(): void {
    this.station$ = this.activatedRoute.params.pipe(
      switchMap(({ station }) => {
        return this.store.select(StationSelectors.selectId(station));
      }),
      filter((data) => !!data)
    );
    this.station$.pipe(take(1)).subscribe((station) => {
      this.store.dispatch(StationApiKeyActions.fetchStation({ station }));
    });
    this.keys$ = of([
      {
        id: 1,
        name: 'test',
        token: '1Eyks8HYr0VZNW7X4xafCvDjakf7GeXwJorzje3Ea',
        station_id: 1,
      },
    ]);
  }
  async submit(event: CustomEvent) {
    const loader = await this.loading.create({ message: 'Loading...' });
    loader.present();
    this.station$
      .pipe(
        first(),
        switchMap((station) => this.station.update(station.id, event.detail)),
        finalize(() => loader.dismiss())
      )
      .subscribe((data) => {
        this.route.navigate(['..'], {
          relativeTo: this.activatedRoute,
        });
      });
  }

  async copyToClipboard(key: StationApiKey) {
    await navigator.clipboard.writeText(key.token);
    const toast = await this.toast.create({
      message: 'Text copied to clipboard',
      duration: 1000,
    });
    await toast.present();
  }
  generateKey(name: string) {}
  deleteKey(key: StationApiKey) {}
}
