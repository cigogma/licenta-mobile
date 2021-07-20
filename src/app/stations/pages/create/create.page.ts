import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { StationsService } from 'src/app/@modules/station';

@Component({
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
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
    this.station
      .create(event.detail)
      .pipe(finalize(() => loader.dismiss()))
      .subscribe((data) => {
        this.route.navigate(['..', data.id, 'edit'], {
          relativeTo: this.activatedRoute,
        });
      });
  }
}
