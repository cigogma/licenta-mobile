import { TestBed } from '@angular/core/testing';

import { StationDeviceService } from './station-device.service';

describe('StationDeviceService', () => {
  let service: StationDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StationDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
