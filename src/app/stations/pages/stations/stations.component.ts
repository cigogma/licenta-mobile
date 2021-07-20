import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Station, StationSelectors } from 'src/app/@modules/station';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.scss'],
})
export class StationsComponent implements OnInit {
  stations$: Observable<Station[]>;

  constructor(private store: Store) {
    this.stations$ = store.select(StationSelectors.selectAll);
  }

  ngOnInit(): void {}
}
