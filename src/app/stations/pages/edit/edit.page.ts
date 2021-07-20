import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { finalize, first, switchMap } from 'rxjs/operators';
import { Station, StationsService } from 'src/app/@modules/station';

@Component({
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  station$: Observable<Station>;

  constructor(
    private station: StationsService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private loading: LoadingController
  ) {}
  ngOnInit(): void {}
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
        this.route.navigate(['..', '..'], {
          relativeTo: this.activatedRoute,
        });
      });
  }
}
