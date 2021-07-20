import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StationDevice } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DeviceSampleService {
  constructor(private api: ApiService) {}

  fetchSample(
    device: StationDevice,
    start: Date,
    end: Date,
    interval: string
  ) {}
}
