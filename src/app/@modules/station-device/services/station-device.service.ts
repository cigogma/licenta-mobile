import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class StationDeviceService {
  constructor(private api: ApiService) {}

  fetch() {}

  update() {}

  delete() {}
}
