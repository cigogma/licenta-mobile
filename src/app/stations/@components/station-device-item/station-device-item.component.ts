import { Component, Input, OnInit } from '@angular/core';
import { StationDevice } from 'src/app/@modules/station-device';

@Component({
  selector: 'app-station-device-item',
  templateUrl: './station-device-item.component.html',
  styleUrls: ['./station-device-item.component.scss'],
})
export class StationDeviceItemComponent implements OnInit {
  @Input()
  device: StationDevice;

  constructor() {}

  ngOnInit(): void {}
}
