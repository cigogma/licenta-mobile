import { Injectable } from '@angular/core';
import { StationDevice } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StationDeviceService {
  constructor() {}

  fetchSample(
    device: StationDevice,
    start: Date,
    end: Date,
    interval: string
  ) {}
}
