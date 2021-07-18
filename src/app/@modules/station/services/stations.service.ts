import { Injectable } from '@angular/core';
import { Station } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  constructor() {}

  public fetch() {}

  public delete(station: Station) {}

  public update(station: Station, data: Partial<Station>) {}
}
