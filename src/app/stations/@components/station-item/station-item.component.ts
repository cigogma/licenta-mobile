import { Component, Input, OnInit } from '@angular/core';
import { Station } from 'src/app/@modules/station';

@Component({
  selector: 'app-station-item',
  templateUrl: './station-item.component.html',
  styleUrls: ['./station-item.component.scss'],
})
export class StationItemComponent implements OnInit {
  @Input()
  station: Station;
  constructor() {}

  ngOnInit(): void {}
}
