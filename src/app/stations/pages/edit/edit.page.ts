import { Component, OnInit } from '@angular/core';
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
  Station,
  StationApiKey,
  StationApiKeyActions,
  StationApiKeySelectors,
  StationApiKeysService,
  StationSelectors,
  StationsService,
} from 'src/app/@modules/station';
import { KeyModalComponent } from '../../@modals/key-modal/key-modal.component';

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
    private keyService: StationApiKeysService,
    private toast: ToastController,
    private modalController: ModalController,
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
    this.keys$ = this.station$
      .pipe(take(1))
      .pipe(
        switchMap((station) =>
          this.store.select(
            StationApiKeySelectors.selectAllFromStation(station.id)
          )
        )
      );
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

  newKey() {
    this.generateKey(Date.now() + '_station');
  }
  async presentKeyModal(token, plainTextKey) {
    const modal = await this.modalController.create({
      component: KeyModalComponent,
      componentProps: {
        token,
        plainTextKey,
      },
    });
    modal.present();
  }
  async generateKey(name: string) {
    const loader = await this.loading.create({ message: 'Loading...' });
    loader.present();
    const toast = await this.toast.create({
      message: 'Key generated',
      duration: 1000,
    });
    this.station$
      .pipe(
        take(1),
        switchMap((station) => this.keyService.create(station, name)),
        finalize(() => loader.dismiss())
      )
      .subscribe(({ token, plainTextKey }) => {
        this.presentKeyModal(token, plainTextKey);
        // this.toast.present();
      });
  }
  async deleteKey(key: StationApiKey) {
    const loader = await this.loading.create({ message: 'Loading...' });
    loader.present();
    const toast = await this.toast.create({
      message: 'Key deleted',
      duration: 1000,
    });
    this.keyService
      .delete(key)
      .pipe(finalize(() => loader.dismiss()))
      .subscribe(() => {
        toast.present();
      });
  }
}
